import Image from "next/image";
import Link from "next/link";
import React from "react";
import phone from "@/images/phone.png";
import "./styles.css";

const Phone = () => {
  return (
    <div id="phone-vr" className="button-contact relative size-[90px]">
      <div className="phone-vr">
        <div className="phone-vr-circle-fill" />
        <div className="phone-vr-img-circle">
          <Link href="tel:0938437600" className="flex">
            <Image
              alt="Phone"
              src={phone}
              width={25}
              height={25}
              className="m-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phone;
