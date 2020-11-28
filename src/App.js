import React, { useState } from "react";
import "./styles.css";
import { Catalog } from "./components/Catalog";
import { MELI } from "./api/api";
import { SearchBar } from "./components/SearchBar";

export default function App() {
  const [products, setProducts] = useState([]);
  const [paging, setPaging] = useState({
    primary_results: 1000,
    limit: 30,
    offset: 1,
    total: 1000
  });

  async function getProducts(title, filters = null) {
    let response = await MELI.searchProduct(title, filters);
    setProducts(response[0]);
    setPaging(response[1]);
  }

  return (
    <div className="App">
      <div className="container p-2">
        <SearchBar
          getProducts={getProducts}
          paging={paging}
          setPaging={setPaging}
        />
        <Catalog products={products} paging={paging} setPaging={setPaging} />
      </div>
    </div>
  );
}
