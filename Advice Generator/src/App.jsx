import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdvicePage from "./pages/AdvicePage";
function App() {
    const apiKey ="https://api.adviceslip.com/advice"
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdvicePage  apiKey={apiKey}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
