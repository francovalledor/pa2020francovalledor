import React from "react";
import "./Product.css";

export function Product(props) {
  let product = props.product;
  return (
    <div className="card rounded m-2 " style={{ minWidth: "16em" }}>
      <div className="card-image p-4 d-flex justify-content-center">
        <img
          style={{ minWidth: "15em" }}
          className="img-fluid"
          src={product.thumbnail}
          alt="Alternate Text"
        />
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h5 className="my-0 font-weight-normal">{product.title}</h5>
        </div>
        <div className="card-body">
          <h2 className="card-title pricing-card-title">
            ${product.price} <small className="text-muted"></small>
          </h2>
          <ul className="list-unstyled mt-3 mb-4 text-muted">
            <li>
              Condición: {product.condition === "used" ? "Usado" : "Nuevo"}
            </li>
            <li>Stock: {product.stock}</li>
          </ul>
          <a
            type="button"
            target="_blank"
            rel="noreferrer"
            href={product.permalink}
            className="btn btn-lg btn-block btn-primary"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
