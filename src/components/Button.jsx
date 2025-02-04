import React from "react";

function Button({extraStyle, text}) {
  return (
    <button className={`${extraStyle} font-semibold text-[16px] leading-[21.6px] rounded-[12px] px-[32px] py-[14px] cursor-pointer hover:opacity-50 duration-300`}>{text}</button>
  )
}

export default Button;
