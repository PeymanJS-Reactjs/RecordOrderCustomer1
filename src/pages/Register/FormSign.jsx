import { useParams, useLocation } from "react-router-dom";
import { InfoUser } from "../../ExternalModules/Contex";
import { useContext, useEffect } from "react";

const Sign = (props) => {
  // useNavigate is used to change path of url
  const location = useLocation();

  useEffect(() => {
    console.log("URL change to:", location.pathname);
  }, [location]);

  const {
    showError,
    infoCustomer,
    AddInfo,
    Name,
    Family,
    UserName,
    Code,
    Phone,
    Email,
    Password,
    HandleChangeName,
    HandleChangeFamily,
    HandleChangeUserName,
    HandleChangeCode,
    HandleChangePhone,
    HandleChangeEmail,
    HandleChangePassword,
  } = useContext(InfoUser);
  return (
    <div className="formRegister">
      <form>
        <div className="leftForm">
          <div className="control_form">
            <label>Name</label>
            <input type="text" value={Name} onChange={HandleChangeName} />
          </div>
          <div className="control_form">
            <label>Family</label>
            <input type="text" value={Family} onChange={HandleChangeFamily} />
          </div>
          <div className="control_form">
            <label>UserName</label>
            <input type="text" value={UserName} onChange={HandleChangeUserName} />
          </div>
          <div className="control_form">
            <label>CodeNational</label>
            <input type="number" value={Code} onChange={HandleChangeCode} />
          </div>
        </div>
        <div className="RigthForm">
          <div className="control_form">
            <label>Phone</label>
            <input type="text" value={Phone} onChange={HandleChangePhone} />
          </div>
          <div className="control_form">
            <label>Email</label>
            <input type="text" value={Email} onChange={HandleChangeEmail} />
          </div>
          <div className="control_form">
            <label>Password</label>
            <input type="text" value={Password} onChange={HandleChangePassword} />
          </div>
        </div>
        <button
          type="submit"
          className="buttonForm"
          onClick={(e) => {
            e.preventDefault();
            AddInfo();
            typeof showError === "string"
              ? (window.location.pathname = "/Profile")
              : console.log(window.location.pathname);
          }}
        >
          Sign up
        </button>
      </form>
      <button
        className="alreadyAccount"
        onClick={() => {
          props.ChangeState();
        }}
      >
        I am have Account
      </button>
    </div>
  );
};

export default Sign;
