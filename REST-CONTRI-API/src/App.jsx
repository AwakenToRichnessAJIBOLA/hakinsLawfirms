import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [userInput, setUserInput] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  const getData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      // console.log(data);
      setAllCountries(data);
    } catch (error) {
      console.error("This is the issue currently:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filterBySearch = (search) => {
    const nations = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(search);
    });
    // console.log("Filtered Nations:", nations);

    setFilteredCountries(nations);
    setUserInput(search);
  };

  const filterByRegion = (region) => {
    if (region === "All") {
      setFilteredCountries(allCountries);
      // console.log("Selected Region:", region);
      // console.log("Selected Regions:", allCountries);
    } else {
      const nationals = allCountries.filter(
        (regions) => regions.region === region
      );
      setFilteredCountries(nationals);
      // console.log("Filtered Nation Region:", nationals);
    }
  };

  return (
    <>
      <Router>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                darkMode={darkMode}
                filterByRegion={filterByRegion}
                filterBySearch={filterBySearch}
                userInput={userInput}
                filteredCountries={filteredCountries}
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
              />
            }
          />
          <Route
            path="/details/:countryName"
            element={<CountryDetails darkMode={darkMode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
