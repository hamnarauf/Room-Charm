import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import NavMenu from "./scenes/global/NavMenu";
import TrackingMenu from "./scenes/global/TrackingMenu";
import Checkout from "./scenes/checkout/Checkout";
import Subscribe from "./scenes/home/Subscribe";
import ShoppingList from "./scenes/home/ShoppingList";
import About from "./scenes/about/About";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="items" element={<ShoppingList />} />
          <Route path="about" element={<About />} />
        </Routes>
        <CartMenu />
        <NavMenu />
        <TrackingMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
