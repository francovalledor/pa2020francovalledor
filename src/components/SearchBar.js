import React, { useEffect, useState } from "react";
import { Paging } from "./Paging";
export function SearchBar(props) {
  const [query, setQuery] = useState("Mario Bros");
  const [nuevo, setNuevo] = useState(true);
  const [orden, setOrden] = useState("relevance");
  const [pag, setPag] = useState({
    total: props.paging.total,
    limit: props.paging.limit,
    offset: props.paging.offset,
    primary_results: props.paging.primary_results
  });

  function toogleNuevo(e) {
    setNuevo(!nuevo);
  }

  function handleChangeOrdenar(e) {
    setOrden(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.getProducts(query, {
      sort: orden,
      itemNew: nuevo,
      paging: {
        limit: 30,
        offset: pag.offset
      }
    });
  }

  useEffect(() => {
    props.getProducts(query, {
      sort: orden,
      itemNew: nuevo,
      paging: pag
    });
  }, [orden, nuevo, pag]);

  return (
    <>
      <form className=" p-2 col-m-12" action="#!" onSubmit={handleSubmit}>
        <div className="md-form col-md-12 ">
          <input
            style={{ fontSize: "1.5em" }}
            className=" text-success form-control col-md-12"
            type="text"
            placeholder="Buscar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
      </form>

      <form className="form-inline d-flex justify-content-center m-2">
        <div className="pt-4 mr-2">
          <div
            className="checkbox"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <label>
              Nuevo
              <input
                className="m-1"
                name="nuevo"
                type="checkbox"
                checked={nuevo}
                onChange={toogleNuevo}
              />
            </label>
          </div>
          <div
            className="checkbox"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <label>
              Usado
              <input
                className="m-1"
                name="usado"
                type="checkbox"
                checked={!nuevo}
                onChange={toogleNuevo}
              />
            </label>
          </div>
        </div>
        <div className="ml-2">
          <label
            className="filter-col text-muted"
            style={{ marginRight: 0 }}
            htmlFor="pref-orderby"
          >
            Ordenar por:
          </label>
          <select
            value={orden}
            onChange={handleChangeOrdenar}
            id="pref-orderby"
            className="form-control "
          >
            <option value={"price_asc"}>Menor Precio</option>
            <option value={"price_desc"}>Mayor Precio</option>
            <option value={"relevance"}>Relevancia</option>
          </select>
        </div>{" "}
      </form>
      <hr />
      <Paging setPaging={setPag} paging={pag} />
    </>
  );
}
