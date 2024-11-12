import React from "react";
import Container from "../container";
import img from "@/images/4948872.webp";
import Image from "next/image";

const Section3 = () => {
  return (
    <Container
      classNameContainer="bg-[#f1f3f4]"
      className="flex-col lg:max-w-[1024px]"
    >
      <h2 className="font-bold text-primary text-2xl lg:text-[34px] text-center leading-10">
        Hãy liên hệ với bộ phận hỗ trợ đăng ký Food App ngay!
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <Image src={img} alt="" className="object-cover lg:max-w-[500px]" />
        <ul className="flex justify-center flex-col gap-5">
          <li className="bg-primary p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Thủ tục rất nhanh và đơn giản
          </li>
          <li className="bg-primary p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Tư vấn hỗ trợ 24/7 trên toàn quốc, Gặp nhân viên tư vấn chính thống
            của FOOD APP
          </li>
          <li className="bg-primary p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Hỗ trợ tư vấn miễn phí lộ trình tăng doanh thu (không thu phí dịch
            vụ ngoài)
          </li>
          <li className="bg-primary p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Thời gian lên App nhanh chóng từ 1- 2 ngày
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Section3;
