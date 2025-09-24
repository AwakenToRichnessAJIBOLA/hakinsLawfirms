import "./AdvicePage.css";
import divider from "../assets/images/pattern-divider-mobile.svg";
import BigDivider from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";
import { useState, useEffect } from "react";

const AdvicePage = ({ apiKey }) => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    try {
      const response = await fetch(apiKey);
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error("Error Fetching advice:", error);
    }
  };

useEffect (() => {
    getAdvice();
},[apiKey])

  return (
    <div className="mainContainer">
      <p>ADVICE #{advice?.id}</p>
      <h2>{`"${advice?.advice}"`}</h2>
      <img className="Divider" src={divider} alt="" />
      <img className="BDivider" src={BigDivider} alt="" />
      <div onClick={getAdvice} className="DContainer">
        <img src={dice} alt="" />
      </div>
    </div> 
  );
};

export default AdvicePage;
