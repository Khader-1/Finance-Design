import React from "react";
import { discount, robot } from "../assets";
import styles from "../styles";
import GetStarted from "./GetStarted";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row py-[6px] px-4 bg-discount-gradient mb-2 rounded-[10px]">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex w-full flex-row justify-between items-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[72px]">
            The Next <br className="hidden sm:block" />
            <span className="text-gradient">Generation </span>
            <br className="hidden sm:block" />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[72px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex flex-1 relative ${styles.flexCenter} my-10 md:my-0`}>
        <img
          src={robot}
          alt="robot"
          className="w-full h-full z-[5] object-cover relative"
        />
        <div className="absolute top-0 pink__gradient w-[40%] h-[35%] z-0" />
        <div className="absolute bottom-40 white__gradient rounded-full w-[80%] h-[80%] z-[1]" />
        <div className="absolute bottom-20 right-20 blue__gradient rounded-full w-[50%] h-[50%] z-[0]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted />
      </div>
    </section>
  );
}
