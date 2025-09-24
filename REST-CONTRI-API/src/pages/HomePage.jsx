import Search from "../components/Search";
import Countries from "../components/Countries";
import PropTypes from "prop-types";
const HomePage = ({
  filterByRegion,
  filterBySearch,
  allCountries,
  userInput,
  filteredCountries,
}) => {
  return (
    <div>
      <Search filterByRegion={filterByRegion} filterBySearch={filterBySearch} />
      <Countries
        allCountries={allCountries}
        userInput={userInput}
        filteredCountries={filteredCountries}
      />
    </div>
  );
};
HomePage.propTypes = {
  filterByRegion: PropTypes.any.isRequired,
  filterBySearch: PropTypes.any.isRequired,
  allCountries: PropTypes.any.isRequired,
  userInput: PropTypes.any.isRequired,
  filteredCountries: PropTypes.any.isRequired,
};

export default HomePage;
