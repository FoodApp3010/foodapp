import Image from "next/image";
import Link from "next/link";
import React from "react";
import zalo from "@/images/zalo.png";
import "./styles.css";

const Zalo = () => {
  return (
    <div id="zalo-vr" className="button-contact relative size-[90px]">
      <div className="phone-vr">
        <div className="phone-vr-circle-fill" />
        <div className="phone-vr-img-circle">
          <Link
            target="_blank"
            href="https://zalo.me/0981169675"
            className="flex"
          >
            <Image
              alt="Zalo"
              src={zalo}
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

export default Zalo;
