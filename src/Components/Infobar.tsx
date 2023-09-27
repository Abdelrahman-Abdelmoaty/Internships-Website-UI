export default function Infobar() {
  return (
    <div className="flex items-center p-[10px] mb-[10px]">
      <input className="w-6 h-6" type="checkbox" />
      <span className="text-[#1D4ED8] font-semibold ml-9">
        <span className="mr-2">247</span>
        Candidates
      </span>
      <span className="text-[#1D4ED8] font-medium ml-auto mr-4 border-r-2 border-[#F3F3F4] pr-4">Qualified</span>
      <span className="mr-4">Task</span>
      <span className="mr-4 text-[#22215B] bg-[#F7F8FD] rounded-full p-[8px] text-sm">25</span>
      <span className="mr-4 border-l-2 border-[#F3F3F4] pl-4">Disqualified</span>
      <span className="text-[#22215B] bg-[#F7F8FD] rounded-full p-[8px] text-sm">78</span>
    </div>
  );
}
