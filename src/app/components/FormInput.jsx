import React from "react";

function FormInput({ label, type, placeholder, name, onChange, error }) {
  return (
    <div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={(e) => {
            if (error) {
              e.target.style.color = "";
              e.target.classList.remove("placeholder-red-500");
            }
            onChange(e);
          }}
          className={`input input-bordered w-full ${
            error ? "border-red-500 placeholder-red-500" : ""
          }`}
          style={error ? { color: "red" } : {}}
        />
      </label>
    </div>
  );
}

export default FormInput;
