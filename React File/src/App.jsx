import "./App.css";
import drawer from "./assets/images/drawers.jpg";
import profile from "./assets/images/avatar-michelle.jpg";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import inactiveShare from "./assets/images/icon-share.svg";
import activeShare from "./assets/images/icon-share-active.svg";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const opener = () => {
    setIsOpen((dammy) => !dammy);
  };

  return (
    <>
      <div className="mainContainer">
        {/* ///////////////////////////////// */}
        <div className="imgContainer">
          <img src={drawer} alt="" />
        </div>
        {/* ////////////////////////////////////////////////////  */}
        <div className="mainContent">
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="changedState">
            {/* ///////////////////////////////// */}
            <div className="inactive">
              <div className="inactiveShare">
                <img src={profile} alt="" />
                <div className="inactiveDetails">
                  <p>Michelle Appleton</p>
                  <p>28 Jun 2020</p>
                </div>
              </div>
              <img
                style={{ width: "8%" }}
                className="share"
                src={isOpen ? activeShare : inactiveShare}
                alt=""
                onClick={opener}
              />
              {/* <div className="share">e
              </div> */}
            </div>
            {/* //////////////////////////////////// */}
          </div>
        </div>
        {isOpen && (
          <div className="activeState">
            <div className="shareContent">
              <h3>SHARE</h3>
              <div className="socialIcon">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
              </div>
            </div>
            <div className="shareActive" onClick={opener}>
              <img src={activeShare} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;