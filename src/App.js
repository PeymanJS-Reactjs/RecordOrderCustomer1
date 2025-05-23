import { useEffect, useState } from "react";
import ContexSlider from "./ExternalModules/Contex";
import Register from "./Register/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web from "./WebSite";
import ProfileUser from "./Profile/Profile";
import "./App.css";
function App() {
  const [show, setShow] = useState(true);

  const changeShow = () => {
    setShow(!show);
  };
  useEffect(() => {}, [show]);

  return (
    <ContexSlider>
      <Router>
        <div id="container">
          <Routes>
            <Route path="/" element={<Web show={show} changeShow={changeShow} />}/>
            <Route path="Register" element={<Register show={show} changeShow={changeShow} />}/>
            <Route path="/Profile" element={<ProfileUser />} />
          </Routes>
        </div>
      </Router>
    </ContexSlider>
  );
}

export default App;
