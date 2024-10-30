import React from "react";
import Container from "../container";
import SectionItem from "./section-item";

import edu from "@/icons/education.svg";
import pen from "@/icons/pen.svg";
import book from "@/icons/book.svg";
import mailBox from "@/icons/mail-box.svg";

const Section5 = () => {
  return (
    <Container className="flex-col gap-8" classNameContainer="bg-[#f1f3f4]">
      <h2 className="font-bold text-[#051f4d] text-2xl lg:text-[34px] text-center uppercase">
        Hiệu quả triển khai
      </h2>
      <p className="text-center text-lg lg:text-[22px]">
        Với kinh nghiệm 10 năm triển khai hỗ trợ cho cá nhà hàng, quán ăn, chúng
        tôi cam kết triển khai một cách hiệu quả, minh bạch, rõ ràng.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionItem img={edu} title="Khách hàng" desc="2563" />
        <SectionItem img={mailBox} title="Đối tác triển khai" desc="1993" />
        <SectionItem img={pen} title="Đối tác quảng cáo" desc="874" />
        <SectionItem img={book} title="Đối tác bán hàng" desc="423" />
      </div>
    </Container>
  );
};

export default Section5;
