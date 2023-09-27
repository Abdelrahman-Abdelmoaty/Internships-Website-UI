import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import uuid from "react-uuid";

const categories = [
  { name: "Applied", count: 1745 },
  { name: "Shortlisted", count: 453 },
  { name: "Technical Interview", count: 123 },
  { name: "Opportunity Browsing", count: 243 },
  { name: "Video Interview I", count: 25 },
  { name: "Video Interview II", count: 25 },
  { name: "Video Interview III", count: 25 },
  { name: "Offer", count: 25 },
  { name: "Withdrawn", count: 25 },
];

export default function Selector() {
  const options = useRef<HTMLDivElement>(null);
  const arrow = useRef<SVGSVGElement>(null);
  const handleSelector = () => {
    options.current?.classList.toggle("slide");
    arrow.current?.classList.toggle("rotate");
  };
  return (
    <div className="relative">
      <button type="button" placeholder="Search" className="px-4 py-2 rounded-[16px] w-[330px] bg-white shadow-sm text-xl text-[#9AA6AC] text-start flex items-center justify-between hover:opacity-80 duration-300 ease-in-out relative z-50" onClick={handleSelector}>
        Select Category
        <FontAwesomeIcon icon={faChevronDown} ref={arrow} className="duration-1000 ease-in-out" />
      </button>
      <div className="absolute w-[330px] h-[100px] z-20 bg-[#f8f9fd] bottom-0"></div>
      <div className="absolute w-[330px] flex flex-col mt-[4px] translate-y-[-680px] duration-1000 ease-in-out" ref={options}>
        {categories.map((e) => (
          <div key={uuid()} className="flex items-center justify-between bg-white shadow-sm my-[1px] px-4 py-6 group hover:bg-[#EDF2FF] duration-300 ease-in-out hover:cursor-pointer">
            <span className="text-[#0B0B0B] group-hover:text-[#1D4ED8] duration-300 ease-in-out ">{e.name}</span>
            <span className="text-[#444444] font-medium bg-[#F8F8F8] text-[14px] rounded-[16px] px-[10px] py-[2px] group-hover:text-[#1D4ED8] duration-300 ease-in-out ">{e.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
