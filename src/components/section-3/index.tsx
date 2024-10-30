import React from "react";
import Container from "../container";
import img from "@/images/fgfg-20240603084521-8qpzj.jpg";
import Image from "next/image";

const Section3 = () => {
  return (
    <Container classNameContainer="bg-[#f1f3f4]" className="flex-col">
      <h2 className="font-bold text-[#bb0f0f] text-2xl lg:text-[34px] text-center">
        Chúng tôi là đơn vị chuyên hỗ trợ các dịch vụ liên quan đến Marketing
        cho nhà hàng, quán ăn, quán cafe
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <Image src={img} alt="" />
        <ul className="flex flex-col gap-5">
          <li className="bg-[#bb0f0f] p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Tối ưu hiệu quả bán hàng trên APP
          </li>
          <li className="bg-[#bb0f0f] p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Hỗ trợ quảng cáo GG, FB, TIKTOK
          </li>
          <li className="bg-[#bb0f0f] p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Hỗ trợ lên FOODAPP cho khách hàng
          </li>
          <li className="bg-[#bb0f0f] p-5 rounded-2xl font-bold text-white text-lg lg:text-xl text-center">
            Tư vấn chiến lược Marketing triển khai
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Section3;
