import { NeedsTag } from '../types';

interface NeedsTagListProps {
  needsTags: NeedsTag[];
}

export const NeedsTagList = ({ needsTags }: NeedsTagListProps) => {
  return (
    <div className="flex flex-col gap-[10px]">
      {needsTags.map((tag) => (
        <div key={tag.id} className="relative border border-gray-300 rounded-[10px] overflow-hidden">
          <div className="absolute top-0 left-0 w-[25%] h-full bg-orange-50" />
          <div className="relative flex justify-between items-center  px-[14px] py-[9px]">
            <p className="text-[14px] text-gray-900 font-bold line-height-[19.6px]">{tag.text}</p>
            {tag.ratio != null && (
              <p className="text-[14px] text-orange-500 font-bold line-height-[19.6px]">
                {Math.round(tag.ratio * 100)}%
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
