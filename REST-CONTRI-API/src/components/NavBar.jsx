// import React from "react";
import { Link } from "react-router-dom";
import { RiMoonFill, RiMoonLine } from "react-icons/ri";
import PropTypes from "prop-types";

const NavBar = ({ darkMode, setDarkMode }) => {
  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const icons = darkMode ? <RiMoonFill /> : <RiMoonLine />;

  return (
    <div className="d-flex justify-content-between p-5 bg-elements custom-text-white aligin-items-center Divider">
      <Link
        to="/"
        className="m-0 text-decoration-none custom-text-white fw-semibold BDivider"
      >
        {" "}
        Where in the world?
      </Link>
      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);
          if (document.body.classList.contains("light")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        className="d-flex align-items gap-2"
        style={{cursor: "pointer"}}
      >
        {icons}
        <p className="m-0"> {darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  darkMode: PropTypes.any.isRequired,
  setDarkMode: PropTypes.any.isRequired,
};
export default NavBar;