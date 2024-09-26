import React, { useState } from "react";

const InputComponent = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
    case "email":
      return (
        <div>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    case "textarea":
      return (
        <div>
          <label>{field.label}</label>
          <textarea
            name={field.name}
            required={field.required}
            value={value}
            onChange={onChange}
          />
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label>
            <input
              type="checkbox"
              name={field.name}
              checked={value}
              onChange={onChange}
            />
            {field.label}
          </label>
        </div>
      );
    case "select":
      return (
        <div>
          <label>{field.label}</label>
          <select
            name={field.name}
            value={value}
            required={field.required}
            onChange={onChange}
          >
            <option value="">Select...</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      return null;
  }
};

export default InputComponent;
