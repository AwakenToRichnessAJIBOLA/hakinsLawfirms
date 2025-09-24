// import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const EachCountry = ({ country }) => {
  const navigate = useNavigate();

  const capital = country.capital ? country.capital : country.name.common;
  const currencies = country.currencies
    ? Object.values(country.currencies)[0].names
    : "None";

  const languages = country.languages
    ? Object.values(country.languages).join(",")
    : "No Official language";

  const borders = country.borders
    ? country.borders.map((brd) => {
        return (
          <p
            className="bg-elements px-4 py-1 rounded-1 custom-text-white"
            key={brd}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/details/${brd.toLowerCase()}`)}
          >
            {brd}
          </p>
        );
      })
    : "No shared borders";

  return (
    <div className="bg-main-color custom-text-white text-start p-5 justify-content-center align-content-center min-vh-100">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="back-btn d-flex gap-2 my-5 bg-elements align-items-center py-2 px-4 rounded-2 shadow custom-text-white text-decoration-none"
      >
        <BiArrowBack className="fs-3 custom-text-white" />
        <p className="m-0">Back</p>
      </div>

      {/* ======================================================  */}
      <div className="d-xl-flex align-items-md-center gap-5 each-country">
        <img
          className="w-100 mt-2"
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <div>
          <h2 className="mt-5 mb-4">{country.name.common}</h2>
          <div className="d-flex flex-column gap-5 flex-xl-row">
            {/* /////////////////////////////////////////// */}
            <div className="w-100">
              <p>
                <b>Population: </b> {country.population.toLocaleString()}
              </p>
              <p>
                <b>Region: </b> {country.region}
              </p>
              <p>
                <b>Sub Region: </b> {country.subregion}
              </p>
              <p>
                <b>Capital: </b> {capital}
              </p>
            </div>
            {/* //////////////////////////////////////// */}
            <div>
              <p>
                <b>Top Level Domain</b> {country.tld[0]}
              </p>
              <p>
                <b>Currencies:</b> {currencies}
              </p>
              <p>
                <b>Language:</b> {languages}
              </p>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////// */}
          <div>
            <b>Border Countries</b>
            <div className="d-flex gap-3 mt-4 flex-xl-row">{borders}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

EachCountry.propTypes = {
  country: PropTypes.any.isRequired,
};

export default EachCountry;
