import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Use navigate to go back

  useEffect(() => {
    const fetchedProduct = {
      id: id,
      name: "Sample Product",
      category: "Category 1",
      freshness: "Brand New",
      price: "100",
    };

    setProduct(fetchedProduct);
  }, [id]);

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
