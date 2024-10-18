import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [productList, setProductList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    freshness: "Brand New",
    price: "",
  });
  const navigate = useNavigate();

  // Fungsi untuk generate ID barang berdasarkan jumlah produk + 1
  const generateProductId = () => {
    const newId = productList.length + 1; // Berdasarkan jumlah produk
    return newId.toString().padStart(4, "0"); // Mengubah ID menjadi 4 digit, contoh: 0001, 0002
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedProducts = [...productList];
      updatedProducts[editIndex] = {
        ...product,
        id: updatedProducts[editIndex].id,
      };
      setProductList(updatedProducts);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newProduct = { ...product, id: generateProductId() }; // Generate ID barang
      setProductList([...productList, newProduct]);
    }

    // Reset form setelah submit
    setProduct({
      name: "",
      category: "",
      freshness: "Brand New",
      price: "",
    });
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
                <li className="nav-item bg-primary">
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
              className="form-control"
              id="productName"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              className="form-select"
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
                />
                <label className="form-check-label">Refurbished</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr
                key={product.id}
                onClick={() => navigate(`/account/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                <td>{product.id}</td> {/* Tampilkan ID barang */}
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.freshness}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
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
