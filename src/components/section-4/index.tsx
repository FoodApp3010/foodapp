import React from "react";
import Container from "../container";
import Image from "next/image";

import core1 from "@/images/people-taking-photos-food_23-2149303524.jpg";
import core2 from "@/images/ma-mien-phi-van-chuyen-shopee-food.jpg";
import core3 from "@/images/grabfood-delivery.jpeg";
import core4 from "@/images/restaurant-delivery-orders-1024x683.jpg";

const Section4 = () => {
  return (
    <Container
      classNameContainer="bg-gradient-to-r from-[#15B392] via-[#54C392] to-[#54C392]"
      className="flex-col"
    >
      <h2 className="text-white font-bold text-center text-2xl lg:text-3xl w-full">
        Chúng tôi sẽ tư vấn hướng dẫn giúp bạn 24/7
      </h2>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
        <div className="p-5 bg-white rounded-xl md:max-h-[350px]">
          <div className="h-full overflow-hidden">
            <h3 className="font-bold text-xl text-primary text-center">
              Hỗ trợ / chăm sóc/ hướng dẫn / Tư vấn 1-1 và hỗ trợ setup menu
              MIỄN PHÍ
            </h3>
            <Image src={core1} alt="" className="mt-4 object-cover" />
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl md:max-h-[350px] overflow-hidden">
          <div className="h-full overflow-hidden">
            <h3 className="font-bold text-xl text-primary text-center">
              Đảm bảo các gian hàng khi lên app sẽ tối đa hóa được doanh thu
            </h3>
            <Image src={core2} alt="" className="mt-4 object-cover" />
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl md:max-h-[350px]">
          <div className="h-full overflow-hidden">
            <h3 className="font-bold text-xl text-primary text-center">
              Dễ dàng tiếp cận tệp khách hàng mới 1 cách THỤ ĐỘNG
            </h3>
            <Image src={core3} alt="" className="mt-4 object-cover" />
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl md:max-h-[350px]">
          <div className="h-full overflow-hidden">
            <h3 className="font-bold text-xl text-primary text-center">
              CAM KẾT RA ĐƠN NẾU ĐI ĐÚNG LỘ TRÌNH TƯ VẤN
            </h3>
            <Image src={core4} alt="" className="mt-4 object-cover" />
          </div>
        </div>
      </div>
      <p className="text-white">
        <strong>*Lưu ý:</strong> Chỉ đăng ký đối tác nhà bán hàng để bán hàng
        trên Food App
      </p>
    </Container>
  );
};

export default Section4;
