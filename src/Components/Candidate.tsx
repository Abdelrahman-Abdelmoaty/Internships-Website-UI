import { CandidateType } from "./MockUpData";
import uuid from "react-uuid";
export default function Candidate({ candidate }: { candidate: CandidateType }) {
  const { imgUrl, name, address, education, hashes, categories } = candidate;

  return (
    <div className="flex items-center gap-x-10 px-[10px] py-[50px] border-y-[1px] border-[#EEEEEE]">
      <input type="checkbox" name="" id="" className="w-6 h-6" />
      <img src={imgUrl} alt="" className="rounded-full" />
      <div className="flex-1 flex flex-col gap-y-3">
        <span className="font-semibold text-xl mb-2">{name}</span>
        <span className="font-medium">{address}</span>
        <span className="font-light">{education}</span>
        <div>
          {hashes.map((hash) => (
            <span key={uuid()} className="text-[#1D4ED8] mr-3">
              {hash}
            </span>
          ))}
        </div>
        <div className="flex">
          {categories.map((category) => (
            <span key={uuid()} className="text-[#037092] bg-[#F3FAFC] rounded-[16px] font-medium px-[10px] py-[2px] mr-3">
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
