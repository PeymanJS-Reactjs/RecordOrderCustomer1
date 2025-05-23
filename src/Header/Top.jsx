
import { Link } from "react-router-dom";
import logo from "../Images/Logo.png"

const TopHeader = (props) => {

  return (
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="searchBox">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="signs">
            <i className="fas fa-shopping-cart"></i>
            <button
              onClick={() => {
                props.changeShow();
                console.log(props.show);
              }}
            >
              <Link to="/Register">
              <i className="far fa-user"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default TopHeader;