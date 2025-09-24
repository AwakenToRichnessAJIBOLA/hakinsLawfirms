import Dropdown from "./Dropdown";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";

const search = ({ filterByRegion, filterBySearch }) => {
  const [userInput, setUserInput] = useState("");

  const filteredNations = (event) => {
    setUserInput(event.target.value);
    filterBySearch(event.target.value.trim().toLowerCase());
  };

  return (
    <div className="d-md-flex px-5 py-4 align-items-md-center justify-content-md-between bg-main-color custom-text-white">
      <form action="" className="position-relative">
        <MdSearch className="fs-2 position-absolute ms-5 search-icon" />
        <input
          type="text"
          className="bg-elements custom-text-white rounded-2 border-0 py-3"
          placeholder="Search for a county..."
          onChange={filteredNations}
        />
      </form>

      <Dropdown filterByRegion={filterByRegion} />
    </div>
  );
};
search.propTypes = {
  filterByRegion: PropTypes.any.isRequired,
  filterBySearch: PropTypes.any.isRequired,
};

export default Search;
