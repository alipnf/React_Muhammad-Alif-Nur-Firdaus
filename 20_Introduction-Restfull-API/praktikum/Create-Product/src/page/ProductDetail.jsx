import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); // Ambil ID dari URL
  const [product, setProduct] = useState(null);

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
    </div>
  );
}
