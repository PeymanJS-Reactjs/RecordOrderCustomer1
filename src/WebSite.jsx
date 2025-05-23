
import TopHeader from "./Header/Top";
import MenuHeader from "./Header/Menu";
// import SliderHeader from "./Header/Slider";
import FeatureHeader from "./Header/Feature";
import FeaturedProducts from "./Main/Products";
import TopCatgory from "./Main/Catgory";
import { Outlet } from "react-router-dom";
const Web = (props) => {
    return (
      <>
        <header style={{ marginBottom: "100px" }}>
          <TopHeader show={props.show} changeShow={props.changeShow} />
          <MenuHeader />
          {/* <SliderHeader /> */}
          <FeatureHeader />
        </header>
        <main>
          <FeaturedProducts />
          <TopCatgory />
            </main>
      </>
    );
}
 
export default Web;