import ContexSlider from "./ExternalModules/Contex";
import Register from "./pages/Register/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import "./App.css";
import Layout from "./pages/Profile/Layout";
import OrderHistory from "./pages/Profile/orderHistory/OrderHistory";
import Wishlist from "./pages/Profile/wishlist/Wishlist";
import Cart from "./pages/Profile/cart/OrderHistory";
import Settings from "./pages/Profile/settings/Settings";
import Logut from "./pages/Profile/logout/OrderHistory";
import Profile from "./pages/Profile/profile/profile";
function App() {
  // const [show, setShow] = useState(true);

  // const changeShow = () => {
  //   setShow(!show);
  // };
  // useEffect(() => {
  //   console.log("test");
  // }, [show]);

  // change show deleted

  return (
    <ContexSlider>
      <Router>
        <div id="container ">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* Please use lowercase url */}
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Layout />}>
              <Route index element={<Profile />} />
              <Route path="order_history" element={<OrderHistory />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="cart" element={<Cart />} />
              <Route path="settings" element={<Settings />} />
              <Route path="logout" element={<Logut />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ContexSlider>
  );
}

export default App;
