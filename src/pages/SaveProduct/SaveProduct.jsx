import axios from "axios";
import React, { useState } from "react";

export default function SaveProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const cleanProduct = () => {
    setProduct({
      title: "",
      description: "",
      category: "",
      price: "",
    });
  };
  const submitProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://dummyjson.com/products/add",
      product
    );
    console.log(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row my-5">
        <form className="form-control " onSubmit={submitProduct}>
          <div className="mb-3">
            <label title="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label title="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label title="exampleInputPassword1" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label title="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary me-3">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={cleanProduct}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
