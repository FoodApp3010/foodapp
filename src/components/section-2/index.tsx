import React from "react";
import Container from "../container";
import SectionItem from "./section-item";
import img from "@/images/hfh-20240603083521-4raqt.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <Container className="max-w-[980px] items-center flex-col py-10">
      <h2 className="uppercase text-[#004AAD] font-bold text-2xl lg:text-[28px] max-w-[442px] text-center">
        GIAN HÀNG, QUÁN ĂN ONLINE XU THẾ CỦA TƯƠNG LAI
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <SectionItem
          className="bg-[#f1f3f4]"
          title="Thuận tiện"
          desc="Việc có thể chọn và đặt món ăn từ điện thoại di động hoặc máy tính rất thuận tiện và tiết kiệm thời gian."
        />
        <SectionItem
          className="bg-[#dee441]"
          title="Khả Năng Tùy Chọn Thực Đơn"
          desc="Khách hàng có thể tùy chỉnh thực đơn theo ý muốn, thêm hoặc bớt thành phần theo sở thích cá nhân."
        />
        <SectionItem
          className="bg-[#e7e6f4]"
          title="Lựa Chọn Đa Dạng"
          desc="Các ứng dụng đặt hàng trực tuyến thường cung cấp nhiều lựa chọn từ các nhà hàng, quán ăn và thực đơn đa dạng."
        />
        <SectionItem
          className="bg-[#dab54d]"
          title="Đánh Giá và Nhận Xét:"
          desc="Người dùng có thể xem đánh giá và nhận xét từ người khác về các món ăn và nhà hàng, giúp họ đưa ra quyết định thông minh."
        />
      </div>
      <Image
        src={img}
        alt="GIAN HÀNG, QUÁN ĂN ONLINE XU THẾ CỦA TƯƠNG LAI"
        className="mt-[-40px]"
      />
    </Container>
  );
};

export default Section2;
