import React from "react";
import OpenAi from "../../assets/images/OpenAi.svg";
import Yandex from "../../assets/images/Yandex.svg";
import Samsung from "../../assets/images/Samsung.svg";
import Microsoft from "../../assets/images/Microsoft.svg";
import Panasonic from "../../assets/images/Panasonic.svg";

function Partners() {
  return (
    <section className="px-[20px] sm:px-[135px] bg-[#F4F1FB] pb-[160px] pt-[140px]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-[47px] text-center sm:text-left">
        <h2 className="font-semibold text-[24px] sm:text-[32px] leading-[32px] sm:leading-[40px] text-[#211F26]">
          Our partners
        </h2>
        <h3 className="text-[#65636D] font-medium text-[18px] sm:text-[22px] leading-[24px] sm:leading-[28px]">
          Companies that trust us
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center sm:justify-between py-[56px] px-[32px] sm:px-[64px] bg-[white] rounded-[16px] gap-[30px]">
        <img src={OpenAi} alt="OpenAi" className="w-[120px] sm:w-[auto]" />
        <img src={Yandex} alt="Yandex" className="w-[120px] sm:w-[auto]" />
        <img src={Samsung} alt="Samsung" className="w-[120px] sm:w-[auto]" />
        <img
          src={Microsoft}
          alt="Microsoft"
          className="w-[120px] sm:w-[auto]"
        />
        <img
          src={Panasonic}
          alt="Panasonic"
          className="w-[120px] sm:w-[auto]"
        />
      </div>
    </section>
  );
}

export default Partners;
