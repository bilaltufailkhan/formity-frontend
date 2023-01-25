import React, { useState } from "react";
import AddressForm from "./Forms/AddressForm";
import PersonalForm from "./Forms/PersonalForm";
import PlanForm from "./Forms/PlanForm";

const categories = [
  { label: "Personal", component: PersonalForm },
  { label: "Address", component: AddressForm },
  { label: "Plan", component: PlanForm },
];

export function Test() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formSections, setFormSections] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddFormSection = () => {
    if (
      selectedCategory &&
      !formSections.some((form) => form.label === selectedCategory.label)
    ) {
      setFormSections([...formSections, selectedCategory]);
    }
  };

  const handleDeleteFormSection = (label) => {
    setFormSections(formSections.filter((form) => form.label !== label));
  };

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="main-content">
        <div className="right-sidebar">
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            onAddFormSection={handleAddFormSection}
          />
        </div>
        <div className="container">
          {formSections.map((form) => (
            <FormSection
              key={form.label}
              form={form}
              onDelete={handleDeleteFormSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return <nav>{/* NavBar content */}</nav>;
}

function CategorySelector({
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
    <>
      <select
        value={selectedCategory ? selectedCategory.label : ""}
        onChange={handleChange}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.label} value={category.label}>
            {category.label}
          </option>
        ))}
      </select>
      <button onClick={onAddFormSection}>Add Form Section</button>
    </>
  );
}

function FormSection({ form, onDelete }) {
  return (
    <div>
      <form.component />
      <button onClick={() => onDelete(form.label)}>Delete</button>
    </div>
  );
}
