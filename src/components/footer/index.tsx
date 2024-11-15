import React from "react";
import Container from "../container";
import Form from "../form";
import Link from "next/link";
import Image from "next/image";
import img from "@/images/food-delivery-service-illustration-download-in-svg-png-gif-file-formats--guy-boy-person-scooter-pack-e-commerce-shopping-illustrations-4561489.webp";

const Footer = () => {
  return (
    <Container
      className="flex-col gap-5 pt-10 pb-5 lg:py-20 lg:pb-10"
      classNameContainer="bg-gradient-to-r from-[#15B392] via-[#54C392] to-[#54C392]"
    >
      <div
        id="contact"
        className="flex max-lg:flex-col max-lg:gap-10 justify-between w-full"
      >
        <div className="flex flex-col max-lg:items-center lg:max-w-[400px] text-white text-center">
          <h2 className="font-bold text-xl">
            Văn phòng Hỗ trợ đăng ký Foodapp
          </h2>
          <Link className="block mt-1" href="tel:0938437600">
            <strong>Số điện thoại:</strong> 0938437600
          </Link>
          <Link href="https://zalo.me/0981169675">
            <strong>Zalo:</strong> 0981169675
          </Link>
          <Link className="block mt-1" href="mailto:htfoodapp123@gmail.com">
            <strong>Email:</strong> htfoodapp123@gmail.com
          </Link>
          <Link className="block mt-1" href="#">
            <strong>Website:</strong> https://foodapp.vercel.app
          </Link>
          <Image src={img} alt="" className="lg:size-96 size-60 mt-10" />
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
