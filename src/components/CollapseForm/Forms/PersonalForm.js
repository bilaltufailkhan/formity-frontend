import axios from "axios";
import CustomInputField from "components/Elements/InputField";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Card, CardBody, Col, Collapse, Container, Row } from "reactstrap";
import { formSchema } from "schema/validation";
import { api } from "utils/constants";

function PersonalForm(props) {
  const [collapse, setCollapse] = React.useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  // Form Functions
  const [data, setData] = useState({
    full_name: "",
    ndis_number: "",
    phone_number: "",
    email: "",
    qualifications: "",
    date_of_assesment: "",
    date_of_report: "",
    plan_method: "",
    plan_provider: "",
    contact_person: "",
    plan_phone: "",
    plan_email: "",
    plan_goals: "",
  });
  let history = useHistory();
  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: data,
    validationSchema: formSchema,
    onSubmit: async (values, { setSubmitting }) => {
      await axios
        .post(`${api}/import`, values, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (res.data) {
            toast.success("Data Saved Successfully!");
            const filePath = res.data.data.file_path;
            window.open(filePath, "download", "_self");
            history.push("/admin/reports");
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Couldn't update data");
        });
    },
  });

  return (
    <>
      <Container className="form-section">
        <ToastContainer autoClose={3000} />
        <Row
          className="d-flex justify-content-between align-items-center collapse-button"
          onClick={toggleCollapse}
        >
          <Col lg={10}>
            <h5>Personal Form</h5>
          </Col>
          <Col lg={2} className="text-right">
            <Row className="d-flex align-items-center">
              <Col xs={6}>
                <button
                  className="btn btn-sm btn-dark py-2"
                  onClick={() => props.onDelete(props.form.label)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </Col>
              <Col xs={6}>
                {collapse ? (
                  <i class="fa-solid fa-chevron-up"></i>
                ) : (
                  <i class="fa-solid fa-chevron-down"></i>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="border-bottom">
          <Collapse isOpen={collapse} style={{ width: "100%" }}>
            <Card>
              <CardBody>
                {/* <Row>
                  <Col lg={6} sm={12}>
                    <CustomInputField
                      type="text"
                      name="text"
                      placeholder="text"
                    />
                  </Col> */}
                <Row className="">
                  <Col xs={12} md={6}>
                    <CustomInputField
                      type="text"
                      id="full_name"
                      placeholder="Full Name"
                      name="full_name"
                      value={data.full_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.full_name && touched.full_name ? (
                      <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                        <strong>Error!</strong> {errors.full_name}
                      </p>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6}>
                    <CustomInputField
                      type="number"
                      id="ndis_number"
                      placeholder="NDIS Provided Registration Number"
                      name="ndis_number"
                      value={data.ndis_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.ndis_number && touched.ndis_number ? (
                      <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                        <strong>Error!</strong> {errors.ndis_number}
                      </p>
                    ) : null}
                  </Col>
                </Row>
                <Row className="">
                  <Col xs={12} md={6}>
                    <CustomInputField
                      type="text"
                      id="phone_number"
                      placeholder="Phone Number"
                      name="phone_number"
                      value={data.phone_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone_number && touched.phone_number ? (
                      <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                        <strong>Error!</strong> {errors.phone_number}
                      </p>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6}>
                    <CustomInputField
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                        <strong>Error!</strong> {errors.email}
                      </p>
                    ) : null}
                  </Col>
                </Row>
                <Row className="">
                  <Col xs={12}>
                    <CustomInputField
                      type="text"
                      id="qualifications"
                      placeholder="Your Qualifications"
                      name="qualifications"
                      value={data.qualifications}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.qualifications && touched.qualifications ? (
                      <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                        <strong>Error!</strong> {errors.qualifications}
                      </p>
                    ) : null}
                  </Col>
                </Row>
                <Row className="">
                  <Col xs={12} md={6}>
                    <CustomInputField
                      type="date"
                      id="date_of_assesment"
                      placeholder="Date of Assesment"
                      name="date_of_assesment"
                      value={data.date_of_assesment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.date_of_assesment && touched.date_of_assesment ? (
                      <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                        <strong>Error!</strong> {errors.date_of_assesment}
                      </p>
                    ) : null}
                  </Col>
                  <Col xs={12} md={6}>
                    <CustomInputField
                      type="date"
                      id="date_of_report"
                      placeholder="Date of Report"
                      name="date_of_report"
                      value={data.date_of_report}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.date_of_report && touched.date_of_report ? (
                      <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                        <strong>Error!</strong> {errors.date_of_report}
                      </p>
                    ) : null}
                  </Col>
                </Row>
                {/* <Col lg={6} sm={12}>
                    <CustomInputField
                      type="text"
                      name="text"
                      placeholder="text"
                    />
                  </Col>
                </Row> */}
              </CardBody>
            </Card>
          </Collapse>
        </Row>
      </Container>
    </>
  );
}

export default PersonalForm;
