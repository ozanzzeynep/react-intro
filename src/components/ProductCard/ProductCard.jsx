import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"
export default function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" alt=" " />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <div className="btn-group gap-3">
          <Link
            to={`/product-detail/${props.product.id}`}
            className="btn btn-primary"
          >
            Details
          </Link>
          <button className="btn btn-danger">Delete</button>
        </div>
        
      </div>
    </div>
  );
}


