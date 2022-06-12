import React from "react";

const InputGroup = ({ total, name, setID }) => {
  return (
    <div class="input-group mb-3">
      <select 
      onChange={e=>setID(e.target.value)}
      class="form-select" id={name}>
        <option value="1" selected>Selecionar...</option>
        {[...Array(total).keys()].map((r) => {
          return (
            <option value={r + 1}>
              {name} - {r + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
