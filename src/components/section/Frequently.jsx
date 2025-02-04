import React from "react";

function Frequently() {
  return (
    <section className="bg-[#F4F1FB] py-[10px] pt-[160px]">
      <div className="border-b mx-[20px] ">
        <h2 className="mb-[40px] sm:mb-[80px]  font-semibold text-[24px] sm:text-[32px] leading-[32px] sm:leading-[40px] text-[#211F26] text-center sm:text-left">
          Frequently asked questions
        </h2>
        <div className="mx-[20px] sm:mx-[135px]">
          <h2 className="font-semibold hover:bg-[#7759BA] duration-300 hover:rounded-[8px] hover:text-white p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#211F26] border-b">
            How do you ensure the security of our data?
          </h2>
          <h2 className="font-semibold hover:bg-[#7759BA] duration-300 hover:rounded-[8px] hover:text-white p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#211F26] border-b">
            What industries do you specialize in?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-between pr-[20px] sm:pr-[40px] bg-[#7759BA] border-b rounded-[8px] mb-[20px] sm:mb-0">
            <h2 className="font-semibold p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] rounded-[8px] leading-[28px] sm:leading-[32px] text-white">
              How do you manage IT projects?
            </h2>
            <button className="text-white cursor-pointer font-semibold text-[14px] sm:text-[16px] leading-[21.6px] mt-[12px] sm:mt-0">
              Close
            </button>
          </div>
          <p className="mt-[8px] bg-[#F7F5FB] p-[20px] sm:p-[40px] rounded-[16px] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]">
            Our project management approach is agile, ensuring flexibility and
            adaptability. We begin with a detailed consultation to understand
            your requirements, followed by planning, development, testing, and
            deployment. Regular updates and transparent communication are
            integral to our process.
          </p>
          <h2 className="font-semibold hover:bg-[#7759BA] duration-300 hover:rounded-[8px] hover:text-white p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#211F26] border-b">
            Can you support our existing IT infrastructure?
          </h2>
          <h2 className="font-semibold hover:bg-[#7759BA] duration-300 hover:rounded-[8px] hover:text-white p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#211F26] border-b">
            What are your pricing models?
          </h2>
          <h2 className="font-semibold hover:bg-[#7759BA] duration-300 hover:rounded-[8px] hover:text-white p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#211F26] border-b">
            How do you handle data recovery and backup?
          </h2>
          <h2 className="font-semibold hover:bg-[#7759BA] duration-300 hover:rounded-[8px] hover:text-white p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#211F26] border-b">
            What is your process for software development?
          </h2>
          <h2 className="font-semibold hover:bg-[#7759BA] duration-300 hover:rounded-[8px] hover:text-white p-[20px] sm:p-[24px] text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#211F26] mb-[40px] sm:mb-[160px]">
            Do you offer support and maintenance services?
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Frequently;
