import group1 from "../../Images/Group1.png";
import group2 from "../../Images/Group2.png";
import group3 from "../../Images/Group3.png";
import group4 from "../../Images/Group4.png";
import group5 from "../../Images/Group5.png";
import off1 from "../../Images/Off1.png";
import off2 from "../../Images/Off2.png";
import off3 from "../../Images/Off3.png";

const TopCatgory = () => {
  return (
    <div id="Catgory">
      <div className="container">
        <section className="title__section">
          <h2>Top Catgory</h2>
        </section>
        <section className="Catgory__section">
          <div className="catgories">
            <div className="catgory">
              <div className="top">
                <img src={group1} alt="Forutes" />
              </div>
              <div className="bottom">
                <p>Vegetables</p>
                <p>165 Products</p>
              </div>
            </div>
            <div className="catgory">
              <div className="top">
                <img src={group2} alt="Drinks" />
              </div>
              <div className="bottom">
                <p>Water and Drinks</p>
                <p>48 Products</p>
              </div>
            </div>
            <div className="catgory">
              <div className="top">
                <img src={group3} alt="Snacks" />
              </div>
              <div className="bottom">
                <p>Snacks</p>
                <p>166 Products</p>
              </div>
            </div>
            <div className="catgory">
              <div className="top">
                <img src={group4} alt="Forutes" />
              </div>
              <div className="bottom">
                <p>Meat</p>
                <p>167 Products</p>
              </div>
            </div>
            <div className="catgory">
              <div className="top">
                <img src={group5} alt="Forutes" />
              </div>
              <div className="bottom">
                <p>River Fish</p>
                <p>64 Products</p>
              </div>
            </div>
          </div>
          <div className="offes">
            <div className="off">
              <div className="wapper">
                <p>Summer Sale</p>
                <p>Low-Fat Meat</p>
                <div className="started">
                  <span>Started at</span>
                  <span>$79.99</span>
                </div>
                <button className="btn">
                  <span> Shop now</span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
              <img src={off2} alt="suggest8" />
            </div>
            <div className="off">
              <div className="wapper">
                <p>Summer Sale</p>
                <p>Sale of the Month</p>
                <div className="time">
                  <div className="unit">00</div>:<div className="unit">02</div>:<div className="unit">18</div>:
                  <div className="unit">46</div>
                </div>
                <button className="btn">
                  <span> Shop now</span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
              <img src={off1} alt="suggest8" />
            </div>
            <div className="off">
              <div className="wapper">
                <p>Summer Sale</p>
                <p>100% Fresh Fruit</p>
                <div className="fresh">
                  <span>Up to</span>
                  <span>64% OFF</span>
                </div>
                <button className="btn">
                  <span> Shop now</span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
              <img src={off3} alt="suggest8" />{" "}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopCatgory;
