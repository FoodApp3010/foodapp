import React from "react";

import bg from "@/images/pngaaa.com-7873734.png";
import Form from "../form";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#15B392] via-[#54C392] to-[#54C392] bg-center px-5 py-10 lg:p-20 relative">
        <h1 className="text-white text-center text-[26px] lg:text-[56px] font-bold">
          Hỗ Trợ Đăng Kí Gian Hàng GRABFOOD
        </h1>
        <div className="max-lg:flex-col lg:flex justify-center gap-10 py-10">
          <div className="flex flex-col items-center">
            <Image src={bg} alt="" className="max-lg:size-56" />
            <p className="text-2xl lg:text-5xl font-bold uppercase xl:px-10 text-white text-center mt-8 lg:mt-10">
              Nhà hàng - quán ăn
            </p>
            <p className="text-white text-xl lg:text-[24px] mt-5 text-center font-medium">
              Chú ý: Không đăng ký chạy xế, chạy xe
            </p>
            <Link
              href="#contact"
              className="bg-primary py-5 px-7 mt-10 inline-block text-2xl lg:text-4xl text-white font-bold uppercase rounded-xl shadow text-center"
            >
              Tư vấn ngay
            </Link>
          </div>
          <div className="hidden lg:block">
            <Form />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <Form />
      </div>
    </>
  );
};

export default HeroSection;
