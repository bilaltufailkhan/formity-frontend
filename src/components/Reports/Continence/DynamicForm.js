import axios from "axios";
import { AnimalAssessment } from "docs/AnimalAssessment";
import { Continence } from "docs/Continence";
import { DogGuide } from "docs/dogGuide";
import { HomeModification } from "docs/HomeModification";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { api } from "utils/constants";

function DynamicForm(props) {
  const [openSections, setOpenSections] = useState({});
  const navigate = useNavigate();
  const handleToggle = (sectionId) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [sectionId]: !prevOpenSections[sectionId],
    }));
  };

  //   Form Handling

  // const [formId, setFormId] = useState("");
  const initialValues = {
    // formId: formId,
    // logo: logo,
  };

  if (props.sections && Array.isArray(props.sections.data)) {
    props.sections.data.forEach((section) => {
      section.form_fields.forEach((field) => {
        const fieldData = JSON.parse(field.form_field);
        fieldData.forEach((data) => {
          initialValues[data.name] = data.value || "";
        });
      });
    });
  }

  // useEffect(() => {
  //   formik.setValues({ ...initialValues, formId });
  // }, [formId]);

  // useEffect(() => {
  //   async function fetchFormId() {
  //     const res = await axios.get(`${api}/get-form-id`);
  //     setFormId(res.data.formId);
  //   }
  //   fetchFormId();
  // }, []);
  const { id } = useParams();

  const formik = useFormik({
    initialValues: { ...initialValues },
    onSubmit: async (values) => {
      // setFormId(Math.random().toString(36).substring(2, 15));
      await axios
        .post(`${api}/store-form-fields`, values, {
          headers: { "Content-Type": "application/json" },
        })
        .then(async (res) => {
          if (res && res.data && res.data.data) {
            console.log("Response after Save: ", res.data.data);
            if (id == 1) {
              Continence(res.data.data);
            } else if (id == 2) {
              AnimalAssessment(res.data.data);
            } else if (id == 3) {
              DogGuide(res.data.data);
            } else if (id == 4) {
              HomeModification(res.data.data);
            } else {
              console.log("Functions are not working", id);
              return;
            }
            // DogGuide(res.data.data);
            // HomeModification(res.data.data);
            navigate("/reports");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  });

  return (
    <>
      <form
        className="dynamic-form"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Row>
          <Col xs={12}>
            {props.sections &&
              props.sections.form_headings &&
              props.sections.form_headings.map((section) => {
                return (
                  <Container
                    fluid
                    id={"section" + section.id}
                    key={section.id}
                    className="py-2 my-3 border-bottom collapse-area"
                  >
                    <Row
                      className="d-flex justify-content-between align-items-center collapse-head"
                      onClick={() => handleToggle(section.id)}
                    >
                      <Col lg={10}>
                        <h5>{section.form_heading}</h5>
                      </Col>
                      <Col className="text-right" lg={2}>
                        {openSections[section.id] ? (
                          <i className="fa-solid fa-chevron-up"></i>
                        ) : (
                          <i className="fa-solid fa-chevron-down"></i>
                        )}
                      </Col>
                    </Row>
                    <Collapse
                      isOpen={openSections[section.id]}
                      className="collapse-body"
                    >
                      <Card className="collapse-card">
                        <CardBody>
                          <Row>
                            {section.form_fields &&
                              section.form_fields.map((field) => {
                                const fieldData = JSON.parse(field.form_field);
                                // console.log("Field Data: ", fieldData);
                                return (
                                  fieldData &&
                                  fieldData.map((data) => {
                                    if (data.type === "select") {
                                      return (
                                        <Col lg={6}>
                                          <Input
                                            key={data.name}
                                            className={
                                              "dynamic-select " + data.className
                                            }
                                            value={formik.values[data.name]}
                                            type={data.type}
                                            name={data.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.onBlur}
                                            placeholder={
                                              "Please enter " + data.placeholder
                                            }
                                          >
                                            {data.values &&
                                              data.values.map((val) => {
                                                return (
                                                  <option value={val.value}>
                                                    {val.label}
                                                  </option>
                                                );
                                              })}
                                          </Input>
                                        </Col>
                                      );
                                    } else if (data.type === "radio-group") {
                                      return (
                                        <Col lg={4} className="pl-5">
                                          <input
                                            key={data.name}
                                            class="form-check-input"
                                            type="radio"
                                            name={data.name}
                                            id={data.name}
                                            value={formik.values[data.name]}
                                            onChange={formik.handleChange}
                                          />
                                          <label
                                            class="form-check-label"
                                            for={data.name}
                                          >
                                            {data.label}
                                          </label>
                                        </Col>
                                      );
                                    } else if (data.type === "checkbox-group") {
                                      return (
                                        <Col lg={6} className="pl-5">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value={formik.values[data.name]}
                                            id={data.name}
                                            onChange={formik.handleChange}
                                          />
                                          <label
                                            class="form-check-label"
                                            for={data.name}
                                          >
                                            {data.label}
                                          </label>
                                        </Col>
                                      );
                                    } else {
                                      return (
                                        <Col lg={6}>
                                          <Input
                                            key={data.form_id}
                                            className={
                                              "dynamic-input-field " +
                                              data.className
                                            }
                                            type={data.type}
                                            name={data.name}
                                            value={formik.values[data.name]}
                                            onChange={formik.handleChange}
                                            onBlur={formik.onBlur}
                                            placeholder={data.placeholder}
                                          />
                                        </Col>
                                      );
                                    }
                                  })
                                );
                              })}
                          </Row>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </Container>
                );
              })}
          </Col>
          <Col xs={12} className="text-right py-3 mb-4">
            <Button color="info" className="mx-3">
              Save and Preview
            </Button>
            <Button color="success" type="submit">
              Save and Download
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
}

export default DynamicForm;
