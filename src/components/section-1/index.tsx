import React from "react";
import Container from "../container";
import Image from "next/image";
import img from "@/images/geg-20240603083951-dlcbd.jpg";

const Section1 = () => {
  return (
    <Container className="justify-end max-w-[1440px] py-10">
      <div className="max-w-[472px]">
        <h2 className="font-bold max-lg:text-center text-2xl text-[#004AAD]">
          Chuyển dịch marketing, quảng bá thương hiệu F&B
        </h2>
        <p className="my-3 text-justify">
          Với ngành F&B việc quảng bá thương hiệu cực kỳ cần thiết, nhất là với
          việc bán hàng trực tuyến. Lúc này các chiến dịch marketing của nhà
          hàng cũng chuyển dần sang các nền tảng trực tuyến như sử dụng các
          trang mạng xã hội như Facebook, Instagram. Hoặc dùng các chương trình
          khuyến mãi như khi dùng để món như giảm giá, giờ vàng hoặc miễn phí
          ship…
        </p>
        <p className="text-justify">
          Với ngành F&B việc quảng bá thương hiệu cực kỳ cần thiết, nhất là với
          việc bán hàng trực tuyến. Lúc này các chiến dịch marketing của nhà
          hàng cũng chuyển dần sang các nền tảng trực tuyến như sử dụng các
          trang mạng xã hội như Facebook, Instagram. Hoặc dùng các chương trình
          khuyến mãi như khi dùng để món như giảm giá, giờ vàng hoặc miễn phí
          ship…
        </p>
      </div>
      <Image src={img} alt="Chuyển dịch marketing, quảng bá thương hiệu F&B" />
    </Container>
  );
};

export default Section1;
