import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import PropTypes from "prop-types";

const Dropdown = ({ filterByRegion }) => {
  const [selectRegion, setSelectRegion] = useState("Filter By Region");
  const options = [
    "All",
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="position-relative d-md-flex flex-md-column justify-content-md-end align-items-start">
      <div
        onClick={() => {
          setToggleDropdown(!toggleDropdown);
        }}
        className="dropdown-display bg-elements p-3 my-3 rounded-2"
      >
        <p className="m-0">{selectRegion}</p>
        <RiArrowDownSLine
          style={{
            transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s ease-in-out",
          }}
        />
      </div>
      {toggleDropdown && (
        <ul className="dropdown-options py-3 px-0 bg-elements w-100 rounded-2 position-absolute ">
          {options.map((reg) => {
            return (
              <li
                onClick={() => {
                  setSelectRegion(reg === "All" ? "Filter By Region" : reg);
                  setToggleDropdown(false);
                  filterByRegion(reg);
                }}
                className="px-3"
                key={reg}
              >
                {reg}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  filterByRegion: PropTypes.any.isRequired,
};

export default Dropdown;
