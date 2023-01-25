import React, { useState } from "react";
import { CustomInput } from "reactstrap";

const categories = [
  { id: "1", category: "Personal" },
  { id: "2", category: "Residential" },
  { id: "3", category: "Professional" },
];

function FormSection() {
  const [formSections, setFormSections] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddSection = () => {
    const id = Math.random().toString(36).substring(2);

    setFormSections([...formSections, { id, category: selectedCategory }]);
  };

  return (
    <>
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map(({ category }) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <button onClick={handleAddSection} disabled={!selectedCategory}>
        Add Section
      </button>
      {formSections.map(({ id, category }) => (
        <div key={id}>
          <h5>{category}</h5>
          <form id={id}>
            <CustomInput
              type="text"
              placeholder={category}
              name=""
              id={Date.now()}
            />
          </form>
          <p>{id}</p>
          {/* Render the form inputs for the section here */}
        </div>
      ))}
    </>
  );
}

export default FormSection;
