import article from "../data/article";

export default function Main() {
  const handleClick = () => {
    const random = Math.floor(Math.random() * 100) + 1; // Menghasilkan angka acak antara 1 dan 100
    console.log("Random number:", random);
  };

  return (
    <div
      className="container mx-auto px-5 d-flex justify-content-center text-center"
      style={{ width: "65%" }}
    >
      <div className="row">
        <div className="col mt-5">
          <img src="/bootstrap-logo.svg" alt="bootstrap-logo" />
          <h1 className="fw-semibold mt-3">{article.title.en}</h1>
          <p className="mt-2">{article.description.en}</p>

          {/* Tombol dengan event handler */}
          <button onClick={handleClick} className="btn btn-primary mt-3">
            Generate Random Number
          </button>

          <form
            className="text-start needs-validation"
            noValidate
            style={{ marginTop: "10%" }}
            id="productForm"
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
                required
              />
              <div className="invalid-feedback">
                Please provide a product name.
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="productCategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select"
                style={{ width: "40%" }}
                id="productCategory"
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid product category.
              </div>
            </div>

            <div className="mb-5" style={{ width: "35%" }}>
              <label htmlFor="productImage" className="form-label">
                Image of Product
              </label>
              <input
                className="form-control"
                type="file"
                id="productImage"
                required
              />
              <div className="invalid-feedback">
                Please upload a product image.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Product Freshness</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="freshness1"
                  value="brandNew"
                  required
                />
                <label className="form-check-label" htmlFor="freshness1">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="freshness2"
                  value="secondHand"
                />
                <label className="form-check-label" htmlFor="freshness2">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="freshness3"
                  value="refurbished"
                />
                <label className="form-check-label" htmlFor="freshness3">
                  Refurbished
                </label>
              </div>
              <div className="invalid-feedback">
                Please choose the product freshness.
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="additionalDescription" className="form-label">
                Additional Description
              </label>
              <textarea
                className="form-control"
                id="additionalDescription"
                rows="5"
                required
              ></textarea>
              <div className="invalid-feedback">
                Please provide an additional description.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Product Price
              </label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid price.
                </div>
              </div>
            </div>

            <div
              className="alert alert-danger d-none"
              id="errorAlert"
              role="alert"
            >
              input harus berupa angka
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "75%", marginTop: "25%" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
