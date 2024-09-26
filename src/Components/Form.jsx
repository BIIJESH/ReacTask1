import React, { useState } from "react";
import InputComponent from "./InputComponents";

// Dynamic form generator
const Form = ({ schema }) => {
  const [formData, setFormData] = useState(() =>
    schema.fields.reduce((acc, field) => {
      acc[field.name] = field.type === "checkbox" ? false : "";
      return acc;
    }, {}),
  );

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Additional actions can be added here (e.g., API calls)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{schema.title}</h2>
      {schema.fields.map((field) => (
        <InputComponent
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
