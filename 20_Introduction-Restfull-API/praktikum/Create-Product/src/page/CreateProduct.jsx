import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [productList, setProductList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    freshness: "",
    price: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fungsi untuk generate ID barang berdasarkan jumlah produk + 1
  const generateProductId = () => {
    const newId = productList.length + 1;
    return newId.toString().padStart(4, "0");
  };

  const validate = () => {
    const newErrors = {};
    const imageTypes = ["image/jpeg", "image/png", "image/gif"];

    // Validasi Product Name
    if (!/^[A-Za-z ]+$/.test(product.name)) {
      newErrors.name = "Product name must only contain letters.";
    }

    // Validasi Product Category
    if (!product.category) {
      newErrors.category = "Please select a product category.";
    }

    // Validasi Product Freshness
    if (!product.freshness) {
      newErrors.freshness = "Please select a product freshness.";
    }

    // Validasi Product Price
    if (product.price <= 0 || isNaN(product.price)) {
      newErrors.price = "Price must be a positive number.";
    }

    // Validasi Image
    if (!product.image) {
      newErrors.image = "Please upload an image.";
    } else if (!imageTypes.includes(product.image.type)) {
      newErrors.image = "Image must be in JPG, PNG, or GIF format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setProduct((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isEditing) {
      const updatedProducts = [...productList];
      updatedProducts[editIndex] = {
        ...product,
        id: updatedProducts[editIndex].id,
        image: URL.createObjectURL(product.image), // Mengatur URL untuk gambar
      };
      setProductList(updatedProducts);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newProduct = {
        ...product,
        id: generateProductId(),
        image: URL.createObjectURL(product.image), // Mengatur URL untuk gambar
      };
      setProductList([...productList, newProduct]);
    }

    // Reset form setelah submit
    setProduct({
      no: "",
      name: "",
      category: "",
      freshness: "",
      price: "",
      image: null,
    });
    setErrors({});
  };

  const handleEdit = (index) => {
    setProduct(productList[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Apakah Anda ingin menghapus produk ini?")) {
      const updatedProducts = productList.filter((_, i) => i !== index);
      setProductList(updatedProducts);
    }
  };
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          "https://6720ed6998bbb4d93ca6b469.mockapi.io/product",
        );
        setProductList(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid px-5">
            <a className="navbar-brand fw-semibold" href="#">
              Simple Header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-md-end"
              id="navbarNav"
            >
              <ul className="navbar-nav gap-3 mt-3 mt-md-0">
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item bg-primary rounded">
                  <Link
                    className="nav-link active text-light"
                    to="/create-product"
                  >
                    Create Product
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <h1>Create Product Page</h1>

        {/* Form untuk memasukkan produk */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="productName"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              className={`form-select ${errors.category ? "is-invalid" : ""}`}
              id="productCategory"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
            {errors.category && (
              <div className="invalid-feedback">{errors.category}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Product Freshness</label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="freshness"
                  value="Brand New"
                  checked={product.freshness === "Brand New"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Brand New</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="freshness"
                  value="Second Hand"
                  checked={product.freshness === "Second Hand"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Second Hand</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="freshness"
                  value="Refurbished"
                  checked={product.freshness === "Refurbished"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">Refurbished</label>
              </div>
            </div>
            {errors.freshness && (
              <div className="invalid-feedback d-block">{errors.freshness}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              id="productPrice"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              className={`form-control ${errors.image ? "is-invalid" : ""}`}
              id="productImage"
              name="image"
              onChange={handleChange}
              required
            />
            {errors.image && (
              <div className="invalid-feedback">{errors.image}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            {isEditing ? "Update" : "Submit"}
          </button>
        </form>

        {/* Tabel untuk menampilkan produk yang telah ditambahkan */}
        <h2 className="mt-5">Product List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={product.id}>
                <td
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {product.id}
                </td>
                <td
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {product.name}
                </td>
                <td>{product.category}</td>
                <td>{product.freshness}</td>
                <td>{product.price}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(index);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
