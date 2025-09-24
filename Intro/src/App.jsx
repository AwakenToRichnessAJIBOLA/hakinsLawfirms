import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainContainer">
        <div className="textContainer">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
<div className="tryyy">
<div className="try">
          
          <h2>
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </h2>
       
      </div>

      <div className="inputContainer">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Address" />
<input type="password" placeholder="Password" />
        <div className="claimButton">
          <button>CLAIM YOUR FREE TRIAL</button>
        </div>

        <div className="terms">
          <p>
            By clicking the button, you are agreeing to our
            <a href="">
              <span> Terms and Services</span>
            </a>
          </p>
        </div>
      </div>


      
</div>
       
      </div>
    </>
  );
}

export default App;
