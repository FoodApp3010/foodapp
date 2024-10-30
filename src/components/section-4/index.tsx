import React from "react";
import Container from "../container";
import Image from "next/image";

import core1 from "@/images/core1.jpg";
import core2 from "@/images/core2.png";
import core3 from "@/images/core3.jpeg";
import core4 from "@/images/core4.jpg";

const Section4 = () => {
  return (
    <Container classNameContainer="bg-[#004aad]" className="flex-col">
      <h2 className="text-white font-bold text-center text-2xl lg:text-3xl w-full">
        Giá trị cốt lõi chúng tôi mang lại cho khách hàng
      </h2>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
        <div className="p-5 bg-white rounded-xl md:max-h-[350px]">
          <div className="h-full overflow-hidden">
            <h3 className="font-bold text-xl text-[#004AAD] text-center">
              Tiết kiếm thời gian đăng ký gian hàng
            </h3>
            <Image src={core1} alt="" className="mt-4 object-cover" />
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl md:max-h-[350px] overflow-hidden">
          <div className="h-full overflow-hidden">
            <h3 className="font-bold text-xl text-[#004AAD] text-center">
              Xây dựng gian hàng chuẩn form, dễ dàng quản lý
            </h3>
            <Image src={core2} alt="" className="mt-4 object-cover" />
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl md:max-h-[350px]">
          <h3 className="font-bold text-xl text-[#004AAD] text-center">
            Hỗ trợ chạy quảng cáo, tăng số lượng khách mua hàng
          </h3>
          <Image src={core3} alt="" className="mt-4 object-cover" />
        </div>
        <div className="p-5 bg-white rounded-xl md:max-h-[350px]">
          <h3 className="font-bold text-xl text-[#004AAD] text-center">
            Đảm bảo doanh thu bán hàng
          </h3>
          <Image src={core4} alt="" className="mt-4 object-cover" />
        </div>
      </div>
    </Container>
  );
};

export default Section4;
