import React, { useEffect, useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import { Button, Input } from "reactstrap";

function FormSidebar({
  categories,
  selectedCategory,
  onCategorySelect,
  onAddFormSection,
}) {
  const handleChange = (event) => {
    onCategorySelect(
      categories.find((category) => category.label === event.target.value)
    );
  };

  return (
    <div className="sidebar-links-list">
      <ScrollLink className="scroll-link" to="#test" smooth>
        Basic Information
      </ScrollLink>
      <ScrollLink className="scroll-link" to="#test" smooth>
        Plan Information
      </ScrollLink>
      <ScrollLink className="scroll-link" to="#test" smooth>
        Residential Information
      </ScrollLink>
      <ScrollLink className="scroll-link" to="#test" smooth>
        Career Information
      </ScrollLink>
      <div className="add-section">
        <Input
          type="select"
          value={selectedCategory ? selectedCategory.label : ""}
          onChange={handleChange}
        >
          <option value="">Select Form Section</option>
          {categories.map((category) => (
            <option key={category.label} value={category.label}>
              {category.label}
            </option>
          ))}
        </Input>
        <Button
          className="btn-block"
          disabled={
            selectedCategory === "" || selectedCategory == null ? true : false
          }
          onClick={onAddFormSection}
        >
          Add Section
        </Button>
      </div>
    </div>
  );
}

export default FormSidebar;
