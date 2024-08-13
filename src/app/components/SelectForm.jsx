import React from "react";

function SelectForm({ label, name, onChange, error }) {
  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        name={name}
        onChange={(e) => {
          if (error) {
            e.target.style.color = "";
            e.target.classList.remove("placeholder-red-500");
          }
          onChange(e);
        }}
        className={`select select-bordered w-full ${
          error ? "border-red-500 placeholder-red-500" : ""
        }`}
      >
        <option selected>choose any priority</option>
        <option>high</option>
        <option>medium</option>
        <option>low</option>
      </select>
    </label>
  );
}

export default SelectForm;
