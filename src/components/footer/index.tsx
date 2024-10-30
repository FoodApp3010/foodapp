import React from "react";
import Container from "../container";
import Form from "../form";
import Link from "next/link";

const Footer = () => {
  return (
    <Container
      className="flex-col gap-5 pt-10 pb-5 lg:py-20 lg:pb-10"
      classNameContainer="bg-[#004AAD]"
    >
      <div
        id="contact"
        className="flex max-lg:flex-col max-lg:gap-10 justify-between w-full"
      >
        <div className="max-w-[400px] text-white">
          <h2 className="font-bold text-xl">
            Văn phòng Hỗ trợ đăng ký Foodapp
          </h2>
          <Link className="block mt-1" href="mailto:htfoodapp123@gmail.com">
            <strong>Email:</strong> htfoodapp123@gmail.com
          </Link>
          <Link className="block mt-1" href="#">
            <strong>Website:</strong> https://foodapp.vercel.app
          </Link>
        </div>
        <Form className="bg-white/70 rounded-xl" />
      </div>
      <p className="text-white lg:mt-10">
        Chúng tôi không phải là đơn vị đơn vị khởi tạo ra foodapp, chúng tôi
        không mạo danh các đơn vị như grab, shopee, baemin,...
      </p>
    </Container>
  );
};

export default Footer;