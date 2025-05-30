import { useContext, useEffect } from "react";
import { InfoUser } from "../ExternalModules/Contex";
const ProfileUser = () => {
  const { showError, fetchInfo, selectUser } = useContext(InfoUser);
  const endPonit = window.location.pathname;

  useEffect(() => {
    endPonit == "/Profile" && fetchInfo();
  }, []);

  console.log(endPonit);
  return (
    <div className="profile">
      <div className="infoPrivate">
        <fieldset>
          {selectUser.map((item) => {
            <form>
              <div className="leftForm">
                <div className="control_form">
                  <label>Name</label>
                  <input type="text" value={item.name} />
                </div>
                <div className="control_form">
                  <label>Family</label>
                  <input type="text" value={item.family} />
                </div>
                <div className="control_form">
                  <label>UserName</label>
                  <input type="text" value={item.userName} />
                </div>
                <div className="control_form">
                  <label>CodeNational</label>
                  <input type="number" value={item.codeNational} />
                </div>
              </div>
              <div className="RigthForm">
                <div className="control_form">
                  <label>Phone</label>
                  <input type="text" value={item.number} />
                </div>
                <div className="control_form">
                  <label>Email</label>
                  <input type="text" value={item.email} />
                </div>
                <div className="control_form">
                  <label>Password</label>
                  <input type="text" value={item.password} />
                </div>
              </div>
              <button
                type="submit"
                className="buttonForm"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Sign up
              </button>
            </form>;
          })}
        </fieldset>
      </div>
      <div className="menu"></div>
      <div className="bg-red-600 w-full rounded-full p-5">
        <p className=" text-white ">hello word</p>
      </div>
    </div>
  );
};

export default ProfileUser;
