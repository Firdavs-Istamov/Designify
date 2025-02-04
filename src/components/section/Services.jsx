import React from "react";
import { DotIcon, LeftIcon, RightIcon } from "../../assets/images";

function Services() {
  return (
    <section className="services-section py-[160px] bg-[#F6F4FC] px-[16px] sm:px-[40px] md:px-[60px] lg:px-[170px] flex flex-col">
      <h2 className="services-title font-semibold text-[32px] leading-[40px] text-[#211F26] mb-[20px]">
        Services
      </h2>
      <div className="service-card bg-[#FBFAFD] rounded-[16px] border-[#EBE7F6] border-[2px] w-full max-w-[1024px] p-[40px] mx-auto">
        <div className="service-header flex items-center justify-between mt-[38px] mb-[30px]">
          <h2 className="service-heading font-semibold text-[28px] leading-[36px]">
            Software Development
          </h2>
          <div className="carousel-control flex items-center gap-[3.97px] cursor-pointer">
            <LeftIcon />
            <div className="dots flex gap-[14.3px]">
              <DotIcon />
              <DotIcon />
              <DotIcon />
            </div>
            <RightIcon />
          </div>
        </div>
        <p className="service-description w-[690px] mb-[40px]">
          IT providers offer custom software development to address a business’s
          unique needs, ranging from mobile apps to enterprise management
          systems. Integration services ensure that new or existing software
          works seamlessly with a company’s current systems.
        </p>
        <div className="marquee-container bg-[#139071] py-[8px] px-[10px] rounded-[10px] mb-[30px]">
          <marquee
            className="marquee-text font-semibold text-[18px] leading-[40px] text-[#FDFCFD]"
            direction="right"
          >
            Desktop Applications ERP Systems SAAS Development Admin Dashboards
          </marquee>
        </div>
      </div>
    </section>
  );
}

export default Services;
