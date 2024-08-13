import React from "react";

function TextArea({ label, placeholder, name, onChange, error }) {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <textarea
          className={`input input-bordered w-full h-16 ${
            error ? "border-red-500 placeholder-red-500" : ""
          }`}
          name={name}
          onChange={(e) => {
            if (error) {
              e.target.style.color = "";
              e.target.classList.remove("placeholder-red-500");
            }
            onChange(e);
          }}
          placeholder={placeholder}
        ></textarea>
      </label>
    </div>
  );
}

export default TextArea;
