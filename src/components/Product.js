import { producto, MELI } from "../api/api";
import React from "react";
import "./Product.css";

export function Product(props) {
  let product = props.product || producto;
  return (
    <div className="card rounded m-2" style={{ minWidth: "16em" }}>
      <div className="card-image p-2">
        <img
          style={{ minWidth: "15em" }}
          className="img-fluid"
          src={product.thumbnail}
          alt="Alternate Text"
        />
      </div>
      <div className="card-image-overlay m-auto ">
        <span className="card-detail-badge">
          {product.condition === "used" ? "Usado" : "Nuevo"}
        </span>
        <br />
        <span className="card-detail-badge">{product.title}</span>
        <br />
        <span className="card-detail-badge">${product.price}</span>
      </div>
      <div className="card-body text-center">
        <div className="ad-title m-auto">
          <h5>{product.title}</h5>
        </div>
      </div>
    </div>
  );
}
