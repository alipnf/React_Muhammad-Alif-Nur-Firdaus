import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // Use navigate to go back

  // Get product list from global state
  const productList = useSelector((state) => state.products);
  const product = productList.find((prod) => prod.id === id); // Find product by ID

  useEffect(() => {
    if (!product) {
      // Handle case where product is not found
      navigate("/create-product");
    }
  }, [product, navigate]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>Detail Product</h1>
      <p>
        <strong>ID:</strong> {product.id}
      </p>
      <p>
        <strong>Name:</strong> {product.name}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Freshness:</strong> {product.freshness}
      </p>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Image:</strong>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100px", height: "100px" }}
        />
      </p>

      {/* Back button to navigate to Create Product page */}
      <button
        className="btn btn-primary"
        onClick={() => navigate("/create-product")}
      >
        Back to Create Product
      </button>
    </div>
  );
}
