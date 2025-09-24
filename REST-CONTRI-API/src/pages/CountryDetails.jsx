import { useParams } from "react-router-dom";
import EachCountry from "../components/EachCountry";
import { useEffect, useState } from "react";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch(() => setCountry(null))
      .finally(() => setLoading(false));
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (!country) return <p>Country not found</p>;

  return <EachCountry country={country} />;
};

export default CountryDetails;
