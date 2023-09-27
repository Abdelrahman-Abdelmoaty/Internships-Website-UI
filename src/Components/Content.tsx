import CandidatesSection from "./CandidatesSection.tsx";
import Filter from "./Filter.tsx";
import Infobar from "./Infobar.tsx";
import SearchBar from "./SearchBar.tsx";
export default function Content() {
  return (
    <main className="flex items-start gap-x-5">
      <div className="w-[25%]">
        <div>
          <h1 className="text-2xl font-semibold text-[#1D4ED8]">London Internship Program</h1>
          <span className="text-sm">London</span>
        </div>
        <div className="flex bg-white p-[15px] rounded-md mt-[100px] mb-[30px] items-center shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#B0BABF] w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input className="flex-1 text-lg outline-none mx-4 placeholder:text-[#9AA6AC]" type="text" placeholder="Serach by name, edu, exp or #tag" name="" id="" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#B0BABF] w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <Filter />
      </div>
      <div className="flex-1">
        <SearchBar />
        <div className="p-[16px] bg-white rounded-[16px] shadow-sm">
          <Infobar />
          <CandidatesSection />
        </div>
      </div>
    </main>
  );
}
