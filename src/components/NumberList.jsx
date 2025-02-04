import React from "react";

function NumberList({ numberText, text, textStyle }) {
  return (
    <li className="w-[279px] pt-[40px] pg-[25px] border-[1px] bg-[#F1EDF9] text-center rounded-[10px] border-[#E8E4F6] hover:scale-110 duration-200 cursor-pointer number-item">
      <strong className={`${textStyle} font-bold pt-[40px] text-[26px]`}>{numberText}</strong>
      <h3 className="pb-[20px] text-[17px]">{text}</h3>
    </li>
  );
}

export default NumberList;
