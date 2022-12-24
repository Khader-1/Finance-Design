import React from "react";
import { arrowUp } from "../assets";
import styles from "../styles";

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary rounded-full h-full w-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-gradient leading-[23px] text-[18px]">
            Get
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-gradient leading-[23px] text-[18px]">
          Started
        </p>
      </div>
    </div>
  );
}
