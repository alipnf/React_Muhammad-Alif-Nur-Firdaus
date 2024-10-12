import { useState } from "react";
import article from "../data/article";

export default function Main() {
  const [title, setTitle] = useState(article.title.en);
  const [description, setDescription] = useState(article.description.en);
  const [language, setLanguage] = useState("en");
  const [productName, setProductName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLanguageToggle = () => {
    if (language === "en") {
      setTitle(article.title.id);
      setDescription(article.description.id);
      setLanguage("id");
    } else {
      setTitle(article.title.en);
      setDescription(article.description.en);
      setLanguage("en");
    }
  };

  const handleRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    console.log("Random number:", random); //random number
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 25) {
      setErrorMessage("Product Name must not exceed 25 characters.");
    } else if (value.length === 0) {
      setErrorMessage("Please enter a valid product name.");
    } else {
      setErrorMessage(""); // Reset error message if valid
    }
    setProductName(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    if (productName.length === 0) {
      alert("Please enter a valid product name.");
    } else {
      console.log("Form submitted with product name:", productName);
    }
    form.classList.add("was-validated");
  };

  return (
    <div
      className="container mx-auto px-5 d-flex justify-content-center text-center"
      style={{ width: "65%" }}
    >
      <div className="row">
        <div className="col mt-5">
          <img src="/bootstrap-logo.svg" alt="bootstrap-logo" />
          <h1 className="fw-semibold mt-3">{title}</h1>
          <p className="mt-2">{description}</p>

          <button
            onClick={handleLanguageToggle}
            className="btn btn-warning mt-3"
          >
            Toggle Language
          </button>

          <button onClick={handleRandomNumber} className="btn btn-primary mt-3">
            Generate Random Number
          </button>

          <form
            className="text-start needs-validation"
            onSubmit={handleSubmit}
            noValidate
            style={{ marginTop: "10%" }}
          >
            <h4 className="mb-3">Detail Product</h4>
            <div className="mb-5">
              <label htmlFor="productName" className="form-label">
                Product name
              </label>
              <input
                type="text"
                className="form-control w-50"
                id="productName"
                value={productName}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a product name.
              </div>
              {/* Tampilkan pesan error */}
              {errorMessage && (
                <div className="alert alert-danger mt-2">{errorMessage}</div>
              )}
            </div>{" "}
            <div className="mb-5">
              <label htmlFor="productCategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select w-50"
                id="productCategory"
                required
              >
                <option value="" disabled>
                  Choose...
                </option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid category.
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="productImage" className="form-label">
                Image of Product
              </label>
              <input
                className="form-control w-50"
                type="file"
                id="productImage"
                required
              />
              <div className="invalid-feedback">
                Please upload a product image.
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="additionalDescription" className="form-label">
                Additional Description
              </label>
              <textarea
                className="form-control w-50"
                id="additionalDescription"
                rows="5"
                required
              ></textarea>
              <div className="invalid-feedback">
                Please provide a description.
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="productPrice" className="form-label">
                Product Price
              </label>
              <div className="input-group w-50">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  id="productPrice"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid price.
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-75">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
