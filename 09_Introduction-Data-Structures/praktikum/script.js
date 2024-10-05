// Ambil elemen DOM yang diperlukan
const form = document.querySelector(".needs-validation");
const tableBody = document.querySelector("table tbody");
const errorAlert = document.getElementById("errorAlert");
const priceInput = document.getElementById("productPrice");

// Fungsi untuk validasi form
function isFormValid() {
  const priceValue = priceInput.value;
  errorAlert.classList.add("d-none");

  if (!form.checkValidity() || isNaN(priceValue) || priceValue.trim() === "") {
    if (isNaN(priceValue) || priceValue.trim() === "") {
      errorAlert.classList.remove("d-none");
    }
    return false;
  }

  return true;
}

// Fungsi untuk mengambil data form
function getFormData() {
  return {
    productName: document.getElementById("productName").value,
    productCategory:
      document.getElementById("productCategory").options[
        document.getElementById("productCategory").selectedIndex
      ].text,
    productImage: document.getElementById("productImage").files[0]
      ? document.getElementById("productImage").files[0].name
      : "No image",
    productFreshness: document.querySelector(
      'input[name="productFreshness"]:checked',
    ).value,
    additionalDescription: document.getElementById("additionalDescription")
      .value,
    productPrice: document.getElementById("productPrice").value,
  };
}

// Fungsi untuk menambahkan baris baru ke tabel
function addRowToTable(data) {
  const rowCount = tableBody.rows.length + 1;
  const newRow = tableBody.insertRow();
  newRow.innerHTML = `
    <th scope="row">${rowCount}</th>
    <td>${data.productName}</td>
    <td>${data.productCategory}</td>
    <td>${data.productImage}</td>
    <td>${data.productFreshness}</td>
    <td>${data.additionalDescription}</td>
    <td>$${data.productPrice}</td>
  `;
}

// Fungsi untuk mereset form setelah submit
function resetForm() {
  form.classList.remove("was-validated");
  form.reset();
}

// Fungsi untuk menangani submit form
function handleFormSubmit(event) {
  event.preventDefault();

  if (!isFormValid()) {
    form.classList.add("was-validated");
    return;
  }

  // Ambil data dari form dan tambahkan ke tabel
  const formData = getFormData();
  addRowToTable(formData);

  // Reset form setelah submit berhasil
  resetForm();
}

// Tambahkan event listener untuk submit form
form.addEventListener("submit", handleFormSubmit);
