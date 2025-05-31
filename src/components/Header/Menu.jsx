const MenuHeader = () => {
    return (
      <div id="bg__menu">
        <div className="container">
          <div className="row">
            <div className="nav">
              <ul className="nav__menu">
                <li className="nav__item">
                  <a href="#">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#">Shop</a>
                </li>
                <li className="nav__item">
                  <a href="#">Pages</a>
                </li>
                <li className="nav__item">
                  <a href="#">Blog</a>
                </li>
                <li className="nav__item">
                  <a href="#">About</a>
                </li>
                <li className="nav__item">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="Tel">
              <i className="fas fa-phone-alt"></i>
              <div>219 555-0114</div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default MenuHeader;