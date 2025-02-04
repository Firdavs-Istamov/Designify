import React from "react";
import HeroImg from "../../assets/images/Hero-Img.png";
import Button from "../Button";
import NumberList from "../NumberList";
import "../../App.css";

function Hero() {
  return (
    <section className="bg-[#F6F4FC] pl-[136px] hero-section">
      <div className="flex items-start gap-[56px] py-[160px] hero-content-wrapper">
        <div>
          <img src={HeroImg} alt="Hero Img" width={232} height={232} />
          <div>
            <h2 className="font-normal text-[16px] leading-[21.6px] text-[#211F26] text-center">
              CEO’s Message
            </h2>
            <span className="text-center block font-bold text-[15px] leading-[17.55px] text-[#84828E]">
              (35 seconds)
            </span>
          </div>
        </div>
        <div className="hero-content-text-wrapper">
          <h2 className="uppercase font-medium text-[16px] leading-[24px] text-[#211F26]">
            multidisciplinary IT Company
          </h2>
          <h2 className="font-semibold text-[72px] leading-[88px] text-[#211F26] hero-content-text">
            Connecting Business
          </h2>
          <h2 className="font-semibold text-[72px] leading-[88px] text-[#5835AB] hero-content-text">
            with Technology
          </h2>
          <div className="mt-[32px] space-x-[16px]">
            <Button
              extraStyle={"bg-[#5835AB] text-[#FBFAFD]"}
              text={"Contact us now"}
            />
            <Button
              extraStyle={"text-[#211F26] border-[2px] rounded-[12px]"}
              text={"Our services"}
            />
          </div>
        </div>
      </div>
      <ul className="flex gap-[16px] pb-[160px] number-list-wrapper">
        <NumberList numberText={"200"} text={"Successfull projects"} />
        <NumberList numberText={"45"} text={"Satisfied clients"} />
        <NumberList numberText={"6"} text={"Year experience"} />
      </ul>
    </section>
  );
}

export default Hero;
