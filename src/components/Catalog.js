import React from "react";
import { Product } from "./Product";

export function Catalog(props) {
  let products = props.products || [];
  function renderProducts() {
    return products.map((product) => (
      <Product product={product} key={product.id} />
    ));
  }
  return (
    <>
      <h1 className="display-4">Catálogo</h1>
      <div className="container">
        <div className="card-deck">
          <div className="card-group">{products ? renderProducts() : ""}</div>
        </div>
      </div>
    </>
  );
}
