import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons/faFileLines";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Filter() {
  return (
    <div>
      <div className="bg-white p-5 mb-[5px] flex justify-between shadow-sm">
        <span>Filters</span>
        <span className="text-[#0B0B0B]">0 Selected</span>
      </div>
      <ul id="filter">
        <li>
          <FontAwesomeIcon icon={faFileLines} />
          <span>Personal Information</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFileLines} />
          <span>Education</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFileLines} />
          <span>Work Experience</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFileLines} />
          <span>Activity Filter</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFileLines} />
          <span>Advanced Filter</span>
        </li>
      </ul>
    </div>
  );
}
