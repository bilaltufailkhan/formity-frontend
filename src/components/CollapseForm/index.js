import CustomInputField from "components/Elements/InputField";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import FormHeader from "./FormHeader";
import AddressForm from "./Forms/AddressForm";
import PersonalForm from "./Forms/PersonalForm";
import PlanForm from "./Forms/PlanForm";
import FormSection from "./FormSection";
import FormSidebar from "./FormSidebar";

const categories = [
  { label: "Personal", component: PersonalForm },
  { label: "Address", component: AddressForm },
  { label: "Plan", component: PlanForm },
];

const CollapseForm = () => {
  // Categories Management
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
    } else {
      toast.error("Section Already Added!");
    }
  };

  const handleDeleteFormSection = (label) => {
    setFormSections(formSections.filter((form) => form.label !== label));
  };

  return (
    <>
      <Container fluid className="collapse-form">
        <ToastContainer autoClose={1000} />
        <Row
          className="d-flex justify-content-space-between align-items-center py-2 sticky-top bg-white"
          style={{ zIndex: "3091" }}
        >
          <FormHeader />
        </Row>
        <Row className="d-flex flex-row">
          <Col lg={8}>
            {formSections.map((form) => (
              <FormSection
                key={form.label}
                form={form}
                onDelete={handleDeleteFormSection}
              />
            ))}
          </Col>
          <Col
            lg={3}
            className="position-fixed bg-light rounded py-5 right-sidebar"
            style={{ zIndex: "3090", right: "15px" }}
          >
            <FormSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
              onAddFormSection={handleAddFormSection}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CollapseForm;
