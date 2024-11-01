import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface SectionItemProps {
  title: string;
  desc: string | number;
  img: StaticImageData;
}

const SectionItem: FC<SectionItemProps> = ({ title, desc, img }) => {
  return (
    <div className="flex gap-3 justify-center items-center bg-white px-4 py-6 shadow rounded-xl">
      <div className="rounded-full border p-2 w-fit h-fit border-[#3c3c3c]">
        <Image alt="" src={img} width={32} height={32} />
      </div>
      <div>
        <span className="text-[42px] leading-[44px] font-bold text-primary">
          {desc}+
        </span>
        <h4 className="text-sm">{title}</h4>
      </div>
    </div>
  );
};

export default SectionItem;
