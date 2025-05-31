import { useState, useContext, useRef } from "react";
import Sign from "./FormSign";
import Loign from "./FormLoign";
import { InfoUser } from "../../ExternalModules/Contex";
import { Link, Outlet } from "react-router-dom";
const Register = (props) => {
  /* This useState is used to show HeaderRegister Component*/
  const [showAlreadyAccount, setAlreadyAccount] = useState(true);
  const { showError } = useContext(InfoUser);
  const BoxError = useRef(null);
  const ChangeState = () => {
    setAlreadyAccount(!showAlreadyAccount);
  };
  return (
    <div className="contentDiv">
      <div className="backgroundDiv">
        <div ref={BoxError} className="BoxError">
          {/* First condition says if showError is string then ... */}
          {/* Socend condition says if showError is Array then ... */}
          {typeof showError === "string" ? (
            <div
              style={{
                color: "green",
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              {showError}
            </div>
          ) : Array.isArray(showError) ? (
            showError.map((item, index) => (
              <div className="msg" key={index}>
                field {item.path} : {item.msg}
              </div>
            ))
          ) : null}
        </div>
        <div
          role="button"
          onClick={() => {
            props.changeShow();
          }}
        >
          <Link to="/">
            <i className="fas fa-times"></i>
          </Link>
        </div>
      </div>
      <div className="fixed">
        <div className="containerDiv">
          {showAlreadyAccount ? (
            <div className="headerRegister">
              <h2>Create Account</h2>
              <p>Create an account so you can explore all the existing product</p>
            </div>
          ) : (
            <div className="headerRegister">
              <h2>Login Account</h2>
              <p>Login to account so you can explore all the existing product</p>
            </div>
          )}

          {showAlreadyAccount ? <Sign ChangeState={ChangeState} /> : <Loign />}
        </div>
      </div>
    </div>
  );
};

export default Register;
