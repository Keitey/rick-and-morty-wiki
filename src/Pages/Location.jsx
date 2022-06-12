import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/Category/InputGroup";

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);

  let { name, type, dimension } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let resident = await Promise.all(
        data.residents.map((r) => {
          return fetch(r).then((res) => res.json());
        })
      );
      setResults(resident);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Localização :{" "}
          <span className="text-primary">
            {name === "" ? "informação desconhecida" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimensão:{" "}
          {dimension === "" ? "informação desconhecida" : dimension}
        </h5>
        <h6 className="text-center">
          Tipo:{" "}
          {type === "" ? "informação desconhecida" : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Local</h4>
          <InputGroup setID={setID} name="localização" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
