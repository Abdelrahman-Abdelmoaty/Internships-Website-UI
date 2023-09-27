import envelope from "../icons/Searchbar/Communication/Vector.svg";
import person1 from "../icons/Searchbar/User/Vector-1.svg";
import person2 from "../icons/Searchbar/User/Vector-2.svg";
import person3 from "../icons/Searchbar/User/Vector.svg";
import tag from "../icons/Searchbar/Communication/Group.svg";
import arrow from "../icons/Searchbar/Arrow/Vector.png";
import Selector from "./Selector";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-between mb-[50px]">
      <Selector />
      <ul id="searchbar">
        <li>
          <img src={tag} alt="" />
        </li>
        <li>
          <img src={person3} alt="" />
        </li>
        <li>
          <img src={person1} alt="" />
        </li>
        <li>
          <img src={person2} alt="" />
        </li>
        <li>
          <img src={envelope} alt="" />
        </li>
        <li>
          <button className="hover:opacity-75 hover:backdrop-brightness-75 duration-300 ease-in-out">
            <span className="mr-2 p-[14px] border-white border-r-2">Move To Video Interview!</span>
            <img className="h-6 w-6" src={arrow} alt="" />
          </button>
        </li>
      </ul>
    </div>
  );
}
