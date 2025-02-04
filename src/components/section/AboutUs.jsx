import React from "react";

function AboutUs() {
  return (
    <section className="bg-[#F6F4FC] pl-[135px] pb-[100px] about-us-section">
      <div className="flex card-wrapper">
        <div className="bg-[#EBE7F6] max-w-[200px] py-[120px] rounded-l-[12px] card-first">
          <span className="-rotate-90 block text-center font-semibold text-[32px] leading-[40px] text-[#211F26] about">
            About Us
          </span>
        </div>
        <div className="w-[200px] bg-[#7759BA] rounded-l-[12px] relative -left-[10px] pl-[42px] pt-[60px] pb-[20px] card-second">
          <h2 className="text-white font-semibold text-[22px] leading-[40px] mb-[39px]">
            What we
          </h2>
          <p className="text-[#FDFCFD]">
            "We are a leading technology solu team of experie products.
          </p>
        </div>
        <div className="w-[100%] bg-[#5835AB] rounded-l-[12px] relative -left-[23px] pl-[42px] pt-[60px] pb-[20px] card-tihrd">
          <div className="flex items-center justify-between w-[690px] main-card">
            <h2 className=" text-white font-semibold text-[22px] leading-[40px] mb-[39px] main-card-title">
              Our mission & vision
            </h2>
            <button
              type="submit"
              className="block bg-[white] py-[12.91px] px-[24px] rounded-[8px] font-semibold text-[16px] leading-[40px] mb-[39px] cursor-pointer read-btn"
            >
              Read more →
            </button>
          </div>
          <p className="text-[#FDFCFD] w-[690px] about-us-paragraph">
            Our vision is to become a global leader in IT innovation, setting
            new standards for excellence in the technology industry. We aim to
            be the go-to partner for businesses seeking transformative solutions
            that not only meet their current needs but also anticipate future
            trends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
