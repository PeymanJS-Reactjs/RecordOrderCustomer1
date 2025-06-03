import TopHeader from "../../components/Header/Top";
import MenuHeader from "../../components/Header/Menu";
import FeatureHeader from "../../components/Header/Feature";
import FeaturedProducts from "./Products";
import TopCatgory from "./Catgory";
const Main = (props) => {
  return (
    <>
      <header style={{ marginBottom: "100px" }}>
        <TopHeader />
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
