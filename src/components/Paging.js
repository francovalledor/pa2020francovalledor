import React, { useEffect, useState } from "react";

export function Paging(props) {
  const [total, setTotal] = useState(props.paging.total);
  const [limit, setLimit] = useState(props.paging.limit);
  const [offset, setOffset] = useState(props.paging.offset);
  const [primary_results, setPrimaryResults] = useState(
    props.paging.primary_results
  );

  function aumentarPaging() {
    setOffset(offset + limit);
  }
  function disminuirPaging() {
    let auxOffset = offset - limit > 0 ? offset - limit : 1;

    setOffset(auxOffset);
  }

  useEffect(() => {
    props.setPaging({
      total,
      limit: limit,
      offset: offset,
      primary_results: primary_results
    });
  }, [total, limit, offset]);

  return (
    <nav aria-label="...">
      <ul className="pagination form-inline d-flex justify-content-center">
        <li className={offset === 1 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link btn-dark"
            value={"i"}
            onClick={(e) => {
              disminuirPaging(e);
            }}
          >
            Anterior
          </button>
        </li>
        <li
          className={
            offset + limit >= primary_results
              ? "page-item disabled"
              : "page-item"
          }
        >
          <button
            className="page-link btn-dark"
            value={"i"}
            onClick={(e) => {
              aumentarPaging(e);
            }}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}
