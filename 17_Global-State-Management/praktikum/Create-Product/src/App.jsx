import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import CreateProduct from "./page/CreateProduct";
import ProductDetail from "./page/ProductDetail";
import Register from "./page/Register";
import Login from "./page/Login";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/account/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}
