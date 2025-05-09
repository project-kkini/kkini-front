import { CrownIcon } from '../assets/CrownIcon';
import { Review } from '../types';

const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return `${dateObj.getFullYear()}.${dateObj.getMonth() + 1}.${dateObj.getDate()}`;
};

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <ul className="flex flex-col gap-[10px] m-[0px] p-[0px]">
      {reviews.map(({ id, user, content, createdAt, imageUrl, isFirst }) => (
        <li key={id} className="p-[16px] bg-gray-50 rounded-[12px] flex flex-col gap-[16px]">
          <div className="flex items-center gap-[6px]">
            <img src={user?.profileImageUrl} alt={user?.name} className="w-[24px] h-[24px] rounded-full" />
            <p className="text-[13px] text-gray-700 font-bold line-height-[19.5px]">{user?.name}</p>
            {isFirst && (
              <div className="flex gap-[2px] px-[6px] py-[4px] bg-white border border-orange-200 rounded-[6px]">
                <CrownIcon />
                <p className="text-[12px] text-orange-500 font-bold line-height-[16.2px]">최초 맛잘알</p>
              </div>
            )}
          </div>
          <p className="text-[14px] text-gray-900 font-normal line-height-[21.7px]">{content}</p>
          {imageUrl.length > 0 && (
            <div className="flex gap-[6px]">
              {imageUrl.slice(0, 3).map((url, index) => (
                <div key={url + index} className="relative w-[calc((100%-8px)/3)] aspect-square">
                  <img
                    src={url}
                    alt={`${user?.name}의 리뷰 이미지`}
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                  {index === 2 && imageUrl.length > 3 && (
                    <div className="absolute inset-0 bg-black/40 rounded-[8px] flex items-center justify-center">
                      <p className="text-white text-[16px] font-bold">+{imageUrl.length - 3}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <p className="text-[12px] text-gray-600 font-normal line-height-[16.2px]">{formatDate(createdAt)}</p>
        </li>
      ))}
    </ul>
  );
};
