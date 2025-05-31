import { useRef, useEffect , useContext } from "react";
import imageSlider from "../Images/ImageSlider.png";
import imageSlider1 from "../Images/ImageSlider2.png";
import imageSlider2 from "../Images/ImageSlider3.png";
import imageSlider3 from "../Images/ImageSlider4.png";
// import { Slider } from "../ExternalModules/Contex.jsx";

const SliderHeader = () => {
  const slideElements = useRef([]);
  const dotElements = useRef([]);
  let slideIndex = useRef(0);
  const animationFramRef = useRef(null);
  const lastTimeRef = useRef(0);
  // const { showSlides } = useContext(Slider);

  
  useEffect(() => {
    // getValue()
  //  showSlides(slideIndex.current, slideElements.current, dotElements.current);
    return () => {
    };
  }, []);

  const currentSlide = (n) => {};

  return (
    <div id="Slider">
      <div className="container">
        <div className="slider">
          <div
            className="slide fade"
            ref={(el) => {
              slideElements.current.push(el);
            }}
          >
            <div className="slide__left">
              <div className="text">WELCOME TO SHOPERY</div>
              <div className="title">
                <h2>
                  Fresh & Healthy <br></br>Organic Food
                </h2>
              </div>
              <div className="sale">
                <h5>
                  Sale up to <span>30% OFF</span>
                </h5>
              </div>
              <div className="free">
                <span>
                  Free shipping on all your order, we deliver, you enjoy
                </span>
              </div>
              <button className="btn">
                <span> Shop now</span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <div className="slide__right">
              <img src={imageSlider2} alt="Slider" />
            </div>
          </div>
          <div
            className="slide fade"
            ref={(el) => {
              slideElements.current.push(el);
            }}
          >
            <div className="slide__left">
              <div className="text">WELCOME TO SHOPERY</div>
              <div className="title">
                <h2>
                  Fresh & Healthy <br></br>Organic Food
                </h2>
              </div>
              <div className="sale">
                <h5>
                  Sale up to <span>30% OFF</span>
                </h5>
              </div>
              <div className="free">
                <span>
                  Free shipping on all your order, we deliver, you enjoy
                </span>
              </div>
              <button className="btn">
                <span> Shop now</span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <div className="slide__right">
              <img src={imageSlider3} alt="Slider" />
            </div>
          </div>
          <div
            className="slide fade"
            ref={(el) => {
              slideElements.current.push(el);
            }}
          >
            <div className="slide__left">
              <div className="text">WELCOME TO SHOPERY</div>
              <div className="title">
                <h2>
                  Fresh & Healthy <br></br>Organic Food
                </h2>
              </div>
              <div className="sale">
                <h5>
                  Sale up to <span>30% OFF</span>
                </h5>
              </div>
              <div className="free">
                <span>
                  Free shipping on all your order, we deliver, you enjoy
                </span>
              </div>
              <button className="btn">
                <span> Shop now</span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <div className="slide__right">
              <img src={imageSlider1} alt="Slider" />
            </div>
          </div>
          <div
            className="slide fade"
            ref={(el) => {
              slideElements.current.push(el);
            }}
          >
            <div className="slide__left">
              <div className="text">WELCOME TO SHOPERY</div>
              <div className="title">
                <h2>
                  Fresh & Healthy <br></br>Organic Food
                </h2>
              </div>
              <div className="sale">
                <h5>
                  Sale up to <span>30% OFF</span>
                </h5>
              </div>
              <div className="free">
                <span>
                  Free shipping on all your order, we deliver, you enjoy
                </span>
              </div>
              <button className="btn">
                <span> Shop now</span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <div className="slide__right">
              <img src={imageSlider} alt="Slider" />
            </div>
          </div>

          {/* <a class="prev" onClick={preventSlide}>
            &#10094;
          </a>
          <a class="next" onClick={nextSlide}>
            &#10095;
          </a> */}
        </div>
        <div className="dots">
          <span
            class="dot"
            ref={(el) => {
              dotElements.current.push(el);
            }}
            onClick={currentSlide(1)}
          ></span>
          <span
            class="dot"
            ref={(el) => {
              dotElements.current.push(el);
            }}
            onClick={currentSlide(2)}
          ></span>
          <span
            class="dot"
            ref={(el) => {
              dotElements.current.push(el);
            }}
            onClick={currentSlide(3)}
          ></span>
          <span
            class="dot"
            ref={(el) => {
              dotElements.current.push(el);
            }}
            onClick={currentSlide(4)}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SliderHeader;
