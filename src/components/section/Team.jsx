import React from "react";
import TeamImg1 from "../../assets/images/team-img1.png";

function Team() {
  return (
    <section className="team-section bg-[#F6F4FC]">
      <h2 className="team-title font-semibold text-[28px] leading-[36px] pl-[134px] mb-[40px]">
        Our professional team
      </h2>
      <ul className="team-list flex justify-between mx-[134px] border-b-[2px] border-[#AA97D7] pb-[150px]">
        <li className="team-member bg-[#EBE7F6] w-[271px] rounded-[16px]">
          <img
            className="team-img relative -top-[60px] -right-[50px]"
            src={TeamImg1}
            alt="Team"
            width={174}
            height={291}
          />
          <div className="team-info relative top-[60px] text-center">
            <h2 className="team-name font-semibold text-[16px] leading-[21px] text-[#211F26]">
              Abrorbek Shukurov
            </h2>
            <span className="team-role font-medium text-[16px] leading-[24px] text-[#84828E]">
              CEO
            </span>
          </div>
        </li>
        <li className="team-member bg-[#EBE7F6] w-[271px] rounded-[16px]">
          <img
            className="team-img relative -top-[60px] -right-[50px]"
            src={TeamImg1}
            alt="Team"
            width={174}
            height={291}
          />
          <div className="team-info relative top-[60px] text-center">
            <h2 className="team-name font-semibold text-[16px] leading-[21px] text-[#211F26]">
              Fayzulloyev Asadbek
            </h2>
            <span className="team-role font-medium text-[16px] leading-[24px] text-[#84828E]">
              Backend Developer
            </span>
          </div>
        </li>
        <li className="team-member bg-[#EBE7F6] w-[271px] rounded-[16px]">
          <img
            className="team-img relative -top-[60px] -right-[50px]"
            src={TeamImg1}
            alt="Team"
            width={174}
            height={291}
          />
          <div className="team-info relative top-[60px] text-center">
            <h2 className="team-name font-semibold text-[16px] leading-[21px] text-[#211F26]">
              Islom Alixujaev
            </h2>
            <span className="team-role font-medium text-[16px] leading-[24px] text-[#84828E]">
              Front End Developer
            </span>
          </div>
        </li>
        <li className="team-member bg-[#EBE7F6] w-[271px] rounded-[16px]">
          <img
            className="team-img relative -top-[60px] -right-[50px]"
            src={TeamImg1}
            alt="Team"
            width={174}
            height={291}
          />
          <div className="team-info relative top-[60px] text-center">
            <h2 className="team-name font-semibold text-[16px] leading-[21px] text-[#211F26]">
              Rahmatov Shohruh
            </h2>
            <span className="team-role font-medium text-[16px] leading-[24px] text-[#84828E]">
              UX/UI designer
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Team;
