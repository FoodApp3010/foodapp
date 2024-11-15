"use client";

import React from "react";
import Image from "next/image";
import img from "@/images/tb-20240814161634-jridm.jpg";

const Dialog = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <div className="w-full h-full bg-black/50 absolute" />
      <div className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute shadow-[rgb(255,225,116)_0px_0px_102px_0px]">
        <Image src={img} alt="" />
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-1 right-2 font-bold text-3xl leading-2 p-2"
        >
          x
        </button>
      </div>
    </div>
  ) : null;
};

export default Dialog;
