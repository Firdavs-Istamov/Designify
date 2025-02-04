import React from "react";
import { NavLink } from "react-router-dom";
import SolidDental from "../../assets/images/sadaf-dental.png";
import RTMedline from "../../assets/images/rtmedline.png";
import TezTaxi from "../../assets/images/tez-taxi.png";
import ServesKotlov from "../../assets/images/serveskotov.png";
import AkaTaxi from "../../assets/images/aka-taxi.png";

function Projects() {
  const projectsMap = [
    {
      image: SolidDental,
    },
    {
      titleB: "RTMedline Website Development",
      title: "Professional corporate website",
      category: "Frontend development",
      image: RTMedline,
    },
    {
      image: TezTaxi,
    },
    {
      titleB: "ServesKotlov",
      title: "CRM system for sales management",
      category: "CRM system & business management",
      image: ServesKotlov,
    },
    {
      titleB: "Aka Taxi Mobile App",
      title: "New way of taxi booking",
      category: "Home taxi application",
      image: AkaTaxi,
    },
  ];

  return (
    <section className="bg-[#5835AB] py-[162px] sm:py-[80px]">
      <div>
        <h2 className="text-center font-semibold text-[32px] leading-[40px] text-[#FBFAFD] sm:text-[24px]">
          Projects
        </h2>
        <div className="text-center mt-[58px] mb-[80px]">
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              className="py-[8px] px-[32px] rounded-[8px] duration-200 hover:opacity-55 font-semibold text-[16px] leading-[21.6px] text-[#211F26] bg-[#FF971E] sm:px-[20px] sm:py-[6px]"
              to={"/"}
            >
              Mobile Applications
            </NavLink>
            <NavLink
              className="py-[8px] px-[32px] rounded-[8px] duration-200 hover:opacity-55 font-semibold text-[16px] leading-[21.6px] text-[#CEC2E8] sm:px-[20px] sm:py-[6px]"
              to={"/#"}
            >
              Websites
            </NavLink>
            <NavLink
              className="py-[8px] px-[32px] rounded-[8px] duration-200 hover:opacity-55 font-semibold text-[16px] leading-[21.6px] text-[#CEC2E8] sm:px-[20px] sm:py-[6px]"
              to={"/#"}
            >
              CRM systems
            </NavLink>
            <NavLink
              className="py-[8px] px-[32px] rounded-[8px] duration-200 hover:opacity-55 font-semibold text-[16px] leading-[21.6px] text-[#CEC2E8] sm:px-[20px] sm:py-[6px]"
              to={"/#"}
            >
              SEO Optimisation
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projectsMap.map((project, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="text-left mt-[10px] sm:text-center">
                {project.title && (
                  <h3 className="text-lg font-bold">{project.title}</h3>
                )}
                {project.category && (
                  <p className="text-sm">{project.category}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pl-[155px] sm:pl-[20px]">
          <div className="flex justify-end pr-[160px] sm:justify-center">
            <button className="mt-10 border cursor-pointer hover:scale-110 duration-200 border-white rounded-[50%] py-[96px] px-[60px] text-white sm:px-[40px] sm:py-[50px] sm:mt-[30px]">
              SEE ALL
            </button>
          </div>
          <div className="mt-10 flex justify-between sm:flex-col sm:items-center project-bottom">
            <button className="project-button">
              <span className="block font-normal text-[18px] leading-[32px] text-[#211F26]">
                Detailed information about how we work
              </span>
              Our working process →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
