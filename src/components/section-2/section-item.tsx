import { cn } from "@/utils";
import React, { FC } from "react";

interface SectionItemProps {
  title: string;
  desc: string;
  className?: string;
}

const SectionItem: FC<SectionItemProps> = ({ title, desc, className }) => {
  return (
    <div className={cn("p-4", className)}>
      <p className="text-lg text-justify text-white">
        <strong>{title}: </strong>
        {desc}
      </p>
    </div>
  );
};

export default SectionItem;
