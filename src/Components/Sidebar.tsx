import arrow from "../icons/Sidebar/Arrow/Vector.svg";
import calender from "../icons/Sidebar/Calendar/Vector.svg";
import communication from "../icons/Sidebar/Communication/Vector.svg";
import file1 from "../icons/Sidebar/File/Vector.svg";
import file2 from "../icons/Sidebar/File/Vector-1.svg";
import interfaceIcon from "../icons/Sidebar/Interface/Vector.svg";
import navigation from "../icons/Sidebar/Navigation/Vector.svg";
import user from "../icons/Sidebar/User/Vector.svg";
import settings from "../icons/Sidebar/Interface/Vector.png";

export default function Sidebar() {
  return (
    <div>
      <ul id="sidebar">
        <li>
          <div className="bg-gray-500 w-[24px] h-[24px] p-4  rounded-full"></div>
        </li>
        <li>
          <img src={navigation} alt="" />
        </li>
        <li>
          <img src={user} alt="" />
        </li>
        <li>
          <img src={calender} alt="" />
        </li>
        <li>
          <img src={communication} alt="" />
        </li>
        <li>
          <img src={file1} alt="" />
        </li>
        <li>
          <img src={file2} alt="" />
        </li>
        <li>
          <img src={interfaceIcon} alt="" />
        </li>
        <li>
          <img src={arrow} alt="" />
        </li>
        <li>
          <img src={settings} alt="" />
        </li>
        <li>
          <div className="bg-gray-500 p-2 rounded-full text-white">AB</div>
        </li>
      </ul>
    </div>
  );
}
