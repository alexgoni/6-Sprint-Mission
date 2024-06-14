import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "pages/Home";
import Login from "pages/users/Login";
import Signup from "pages/users/Signup";
import FleaMarket from "pages/market/FleaMarket";
import FAQ from "pages/supply/FAQ";
import Privacy from "pages/supply/Privacy";
import FreeBoard from "pages/supply/FreeBoard";
import AddItemPage from "pages/market/AddItem";
import ItemPage from "pages/market/Item";
import useScrollTop from "hooks/useScrollTop";
import GlobalStyle from "styles/GlobalStyle";

export default function App() {
  useScrollTop();

  return (
    <>
      <ToastContainer autoClose={500} hideProgressBar newestOnTop />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<FleaMarket />} />
        <Route path="/items/:productId" element={<ItemPage />} />
        <Route path="/free-board" element={<FreeBoard />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}
