import React from "react";
import Container from "../container";
import Image from "next/image";
import img from "@/images/food+and+grocery+delivery+service.png";

const Section1 = () => {
  return (
    <Container className="justify-end py-10">
      <div className="lg:max-w-[472px] my-auto">
        <h2 className="font-bold max-lg:text-center text-2xl text-primary">
          Đăng ký bán hàng cùng Food App đơn giản, xét duyệt trong 24h, hỗ trợ
          nhanh, không mất chi phí
        </h2>
        <ul className="list-disc text-lg ml-5 mt-5 space-y-2">
          <li>
            Bạn đang kinh doanh nhà hàng và muốn bùng nổ doanh số cùng Food App
          </li>
          <li>
            Bạn đang băn khoăn không biết thủ tục đăng ký, hồ sơ đăng ký như nào
          </li>
          <li>
            Bạn đang băn khoăn không biết cách sử dụng app và bán hàng trên Food
            App
          </li>
        </ul>
      </div>
      <Image
        src={img}
        alt="Chuyển dịch marketing, quảng bá thương hiệu F&B"
        className="object-cover"
        width={400}
      />
    </Container>
  );
};

export default Section1;
