import React from "react";
import FooterLogo from "../../assets/images/FooterLogo.svg";
import TopIcon from "../../assets/images/Top.svg";

function Footer() {
  return (
    <footer className="bg-[#F6F4FA] px-[20px] sm:px-[135px] pb-[80px]">
      <div
        className="flex justify-center sm:justify-end pt-[40px] mb-[56px] cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={TopIcon} alt="Top" width={64} height={64} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <a href="#">
          <img
            className="scale-75 mb-[32px] sm:mb-0"
            src={FooterLogo}
            alt="Logo"
          />
        </a>
        <ul className="w-full sm:w-[470px]">
          <li className="border-t border-b py-[12px] border-[#EAE7EC] text-center sm:text-left">
            About Us
          </li>
          <li className="border-b py-[12px] border-[#EAE7EC] text-center sm:text-left">
            Mission & Vision
          </li>
          <li className="border-b py-[12px] border-[#EAE7EC] text-center sm:text-left">
            Mission and vision
          </li>
          <li className="border-b py-[12px] border-[#EAE7EC] text-center sm:text-left">
            Our Services
          </li>
          <li className="border-b py-[12px] border-[#EAE7EC] text-center sm:text-left">
            Our Projects
          </li>
          <li className="border-b py-[12px] border-[#EAE7EC] text-center sm:text-left">
            Client testimonials
          </li>
          <li className="border-b py-[12px] border-[#EAE7EC] text-center sm:text-left">
            Calculate the project
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
