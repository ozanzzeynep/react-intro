import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import axios from "axios";

export default function ProductCard(props) {
  const deleteProduct = async () => {
    try {
      const response = await axios.delete(
        `https://dummyjson.com/products/${props.product.id}`
      );
      console.log(props.product.id + " id'li ürün silindi");
    } catch (e) {
      console.error("Ürün silinemedi", e);
    }
  };

  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" alt=" " />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <div className="btn-group gap-3">
          <Link
            to={`/product-detail/${props.product.id}`}
            className="btn btn-warning"
          >
            Details
          </Link>
          <button className="btn btn-dark" onClick={deleteProduct}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
