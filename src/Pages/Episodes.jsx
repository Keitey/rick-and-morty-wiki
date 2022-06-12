import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filter/Category/InputGroup";

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);

  let { air_date, name } = info;

  console.log(info);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let character = await Promise.all(
        data.characters.map((r) => {
          return fetch(r).then((res) => res.json());
        })
      );
      setResults(character);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episódio :{" "}
          <span className="text-primary">
            {name === "" ? "informação desconhecida" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Data de lançamento:{" "}
          {air_date === "" ? "informação desconhecida" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Episódios</h4>
          <InputGroup setID={setID} name="episódio" total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
