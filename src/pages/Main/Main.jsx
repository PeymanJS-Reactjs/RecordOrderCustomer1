import TopHeader from "../../components/Header/Top";
import MenuHeader from "../../components/Header/Menu";
// import SliderHeader from "./Header/Slider";
import FeatureHeader from "../../components/Header/Feature";
import FeaturedProducts from "./Products";
import TopCatgory from "./Catgory";
import { Outlet } from "react-router-dom";
const Main = (props) => {
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
};

export default Main;
