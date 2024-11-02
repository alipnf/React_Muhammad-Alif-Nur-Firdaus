import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import CreateProduct from "./page/CreateProduct";
import ProductDetail from "./page/ProductDetail";
import Register from "./page/Register";
import Login from "./page/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
