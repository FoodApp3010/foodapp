import { cn } from "@/utils";
import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  classNameContainer?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  classNameContainer,
}) => {
  return (
    <section className={cn("w-full", classNameContainer)}>
      <div
        className={cn(
          "max-w-[980px] w-full flex max-lg:flex-col mx-auto gap-7 lg:gap-10 max-lg:px-5 py-20 lg:py-32",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
