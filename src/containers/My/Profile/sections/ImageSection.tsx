'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Img, ImgEditButton } from '../components/Img';

const DEFAULT_IMAGE_URL = 'https://avatars.githubusercontent.com/u/26402298?v=4';

export function ImageSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleEditButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    console.log('New image URL:', imageUrl);
    // @TODO: 이미지 변경 요청
    // const formData = new FormData();
    // formData.append('image', file);
  };

  return (
    <div className="relative w-fit mx-auto">
      <Img src={image ?? DEFAULT_IMAGE_URL} />
      <ImgEditButton className="absolute right-0 bottom-0" onClick={handleEditButtonClick} />
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
    </div>
  );
}
