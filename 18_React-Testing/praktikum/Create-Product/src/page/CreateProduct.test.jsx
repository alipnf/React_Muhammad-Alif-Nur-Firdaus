import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("CreateProduct Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: [], // Initialize with any initial state you want to test
    });
  });

  test("allows input for Product Name and displays it", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>,
    );

    const nameInput = screen.getByLabelText(/Product Name/i);
    fireEvent.change(nameInput, { target: { value: "Test Product" } });
    expect(nameInput.value).toBe("Test Product");
  });

  test("allows selection of Product Category and displays it", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>,
    );

    const categorySelect = screen.getByLabelText(/Product Category/i);
    fireEvent.change(categorySelect, { target: { value: "Category 1" } });
    expect(categorySelect.value).toBe("Category 1");
  });

  test("allows input for Product Price and displays it", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>,
    );

    const priceInput = screen.getByLabelText(/Product Price/i);
    fireEvent.change(priceInput, { target: { value: "100" } });
    expect(priceInput.value).toBe("100");
  });

  test("allows uploading a Product Image and displays it", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>,
    );

    const fileInput = screen.getByLabelText(/Product Image/i);
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(fileInput.files[0]).toEqual(file);
    expect(fileInput.files.length).toBe(1);
  });
});
