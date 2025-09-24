// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Countries = ({ allCountries, userInput, filteredCountries }) => {
  const displayCountries = userInput ? filteredCountries : allCountries;
  return (
    <div className="bg-main-color d-flex flex-column min-vh-100">
      <div className="all-countries py-5 px-5 custom-text-white text-start min-vh-50">
        {userInput && filteredCountries.length === 0 ? (
          <p className="text-center fw-semibold fs-4 ">
            Country not found: <b>{userInput}</b>
          </p>
        ) : (
          displayCountries.map((country) => {
            const { name, population, region, capital, flags } = country;
            return (
              <div className="bg-elements" key={name.common}>
                <Link
                  to={`/details/${name.common}`}
                  className="rounded-2 custom-text-white text-decoration-none"
                  // onClick={() =>
                  //   console.log("Navigating to:", `/details/${name.common}`)
                  // }
                >
                  <img
                    className="w-100 rounded-top"
                    src={flags.png}
                    alt={flags.alt}
                  />
                  <div className="d-flex flex-column px-4 py-5 gap-1">
                    <h2 className="mb-3">{name.common}</h2>
                    <p className="m-0">
                      <span className="fw-semibold">Population: </span>
                      {population.toLocaleString()}
                    </p>
                    <p className="m-0">
                      <span className="fw-semibold">Region: </span>
                      {region}
                    </p>
                    <p className="m-0">
                      <span className="fw-semibold">Capital: </span>
                      {capital ? capital : name.common}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

Countries.propTypes = {
  allCountries: PropTypes.any.isRequired,
  userInput: PropTypes.any.isRequired,
  filteredCountries: PropTypes.any.isRequired,
};

export default Countries;
