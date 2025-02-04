import React from "react";
import JohnSmith from "../../assets/images/JohnSmith.png";
import { QuoteIcon } from "../../assets/images";

function ClientSection() {
  return (
    <section className="client-section py-[160px] bg-[#EAE6F5]">
      <div className="section-header flex flex-col sm:flex-row justify-between items-center px-[20px] sm:px-[143px]">
        <h2 className="section-title font-bold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] text-[#211F26] text-center sm:text-left">
          Client testimonials
        </h2>
        <button className="read-all-btn font-semibold text-[14px] sm:text-[16px] leading-[21.6px] text-[#211F26] py-[12.91px] px-[24px] rounded-[8px] bg-white cursor-pointer duration-200 hover:scale-110 mt-[20px] sm:mt-0">
          Read All Testimonials →
        </button>
      </div>
      <ul className="testimonial-list flex flex-col sm:flex-row items-center gap-[30px] pl-[20px] sm:pl-[135px] mt-[40px] sm:mt-[84px]">
        <li className="testimonial-item p-[24px] rounded-[16px] bg-white w-full sm:w-[514px]">
          <p className="testimonial-text w-full mb-[40px]">
            Outstanding service! The team at One Data transformed our outdated
            systems into a streamlined, efficient network. We’ve seen a
            significant boost in productivity since partnering with them.
          </p>
          <div className="testimonial-author flex flex-col sm:flex-row items-center gap-[24px]">
            <img src={JohnSmith} alt="John Smith" width={138} height={138} />
            <div className="author-info">
              <strong className="author-name font-semibold text-[24px] leading-[32px] text-[#211F26]">
                John Smith
              </strong>
              <h3 className="author-title font-normal text-[14px] leading-[20px] text-[#65636D]">
                CEO of Tech Innovations Inc.
              </h3>
            </div>
            <QuoteIcon />
          </div>
        </li>
        <li className="testimonial-item p-[24px] rounded-[16px] bg-white w-full sm:w-[514px]">
          <p className="testimonial-text w-full mb-[40px]">
            Outstanding service! The team at One Data transformed our outdated
            systems into a streamlined, efficient network. We’ve seen a
            significant boost in productivity since partnering with them.
          </p>
          <div className="testimonial-author flex flex-col sm:flex-row items-center gap-[24px]">
            <img src={JohnSmith} alt="John Smith" width={138} height={138} />
            <div className="author-info">
              <strong className="author-name font-semibold text-[24px] leading-[32px] text-[#211F26]">
                John Smith
              </strong>
              <h3 className="author-title font-normal text-[14px] leading-[20px] text-[#65636D]">
                CEO of Tech Innovations Inc.
              </h3>
            </div>
            <QuoteIcon />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ClientSection;
