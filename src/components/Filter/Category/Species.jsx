import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({ setPageNumber, setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Espécies
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => (
            <FilterBTN
              key={index}
              name="species"
              index={index}
              items={items}
              task={setSpecies}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
