import { http } from '@/apis/http';
import { useCallback, useState } from 'react';

export function useUploader({ upload }: { upload: (url: string) => void }) {
  const [loading, setLoading] = useState(false);

  const uploadFile = useCallback(async (restaurantId: number, _file: File) => {
    setLoading(true);

    try {
      const { presignedUrl } = await getPresignedUrl({ restaurantId });

      const arrayBuffer = await new Promise<ArrayBuffer>((res, rej) => {
        const reader = new FileReader();
        reader.onload = () => res(reader.result as ArrayBuffer);
        reader.onerror = rej;
        reader.readAsArrayBuffer(_file);
      });

      await putImageToS3({ file: arrayBuffer, url: presignedUrl });

      const url = await getFileURL({ fileName: presignedUrl });

      upload(url);
    } catch (error: any) {
      console.error(error?.response?.data?.error || 'Something went wrong');
    }
    setLoading(false);
  }, []);

  return { uploadFile };
}

async function putImageToS3({ url, file }: { url: string; file: ArrayBuffer }) {
  await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': 'image/png',
    },
    cache: 'no-store',
  });
}

async function getFileURL({ fileName }: { fileName: string }) {
  return http.get<any, string>(`/api/v1/images/${fileName}`);
}

async function getPresignedUrl({ restaurantId }: { restaurantId: number }) {
  return http.get<any, { presignedUrl: string }>(`/api/v1/images/review/${restaurantId}/presigned-url`);
}
