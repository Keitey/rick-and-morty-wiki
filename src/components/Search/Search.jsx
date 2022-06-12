import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Buscar personagem"
        className={styles.input}
      />
      <button
        className={`${styles.btn} btn btn-primary fs-5`}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
