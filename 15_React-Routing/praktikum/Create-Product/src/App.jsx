import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import CreateProduct from "./page/CreateProduct";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Route untuk Create Product Page */}
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}
