import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { formSchema } from "schema/validation";
import { api } from "utils/constants";
import CustomInputField from "../Elements/InputField";

// const data = {

// };

const BasicForm = (props) => {
  const data = {
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
  };
  // const [data, setData] = useState({
  //   full_name: "",
  //   ndis_number: "",
  //   phone_number: "",
  //   email: "",
  //   qualifications: "",
  //   date_of_assesment: "",
  //   date_of_report: "",
  //   plan_method: "",
  //   plan_provider: "",
  //   contact_person: "",
  //   plan_phone: "",
  //   plan_email: "",
  //   plan_goals: "",
  // });
  const navigate = useNavigate();
  const {
    errors,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: data,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      await axios
        .post(`${api}/import`, values, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (res.data) {
            toast.success("Data Saved Successfully!");
            const filePath = res.data.data.file_path;
            window.open(filePath, "download", "_self");
            navigate("/admin/reports");
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
      <div className="content pt-0 mt-4">
        <ToastContainer autoClose={1000} />
        {/* Reports Header */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Container fluid className="sticky-top reports-container">
            {/* Reports Form Starts here */}
            <Row>
              <Container>
                <Row>
                  <Col xs={12}>
                    <h3>1. Participant & Plan Management Details</h3>
                  </Col>
                </Row>
                <Row>
                  {/* Personal Information */}
                  <Card
                    id="personal-details"
                    className="vw-100 rounded form-card px-md-5"
                  >
                    <CardHeader className="border-bottom">
                      <h4>1.1 Personal Details</h4>
                    </CardHeader>
                    <CardBody>
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
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
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
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
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
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
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
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
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
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
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
                          {errors.date_of_assesment &&
                          touched.date_of_assesment ? (
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
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
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
                              <strong>Error!</strong> {errors.date_of_report}
                            </p>
                          ) : null}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  {/* Plan Information */}
                  <Card
                    id="plan-details"
                    className="vw-100 rounded form-card px-md-5"
                  >
                    <CardHeader className="border-bottom">
                      <h4>1.3 Plan Details</h4>
                    </CardHeader>
                    <CardBody>
                      <Row className="">
                        <Col xs={12}>
                          <Input
                            type="select"
                            className="default-select"
                            name="plan_method"
                            id="plan-method"
                            value={data.plan_method}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" selected>
                              NDIS Plan Management Method
                            </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Input>
                          {/* <Field
                            as="select"
                            className="form-control default-select"
                            name="plan_method"
                            id="plan_method"
                            value={data.plan_method}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option
                              value=""
                            >
                              NDIS Plan Management Method
                            </option>
                            <option value="2">
                              2
                            </option>
                            <option value="3">
                              3
                            </option>
                          </Field> */}
                          {/* <select
                            className="form-control default-select"
                            name="plan_method"
                            id="plan_method"
                            value={data.plan_method}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            
                          </select> */}
                          {errors.plan_method && touched.plan_method ? (
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
                              <strong>Error!</strong> {errors.plan_method}
                            </p>
                          ) : null}
                        </Col>
                      </Row>
                      <Row className="">
                        <Col xs={12} md={6}>
                          <CustomInputField
                            type="text"
                            id="plan_provider"
                            placeholder="Plan Management Provider"
                            name="plan_provider"
                            value={data.plan_provider}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.plan_provider && touched.plan_provider ? (
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
                              <strong>Error!</strong> {errors.plan_provider}
                            </p>
                          ) : null}
                        </Col>
                        <Col xs={12} md={6}>
                          <CustomInputField
                            type="text"
                            id="contact_person"
                            placeholder="Contact Person"
                            name="contact_person"
                            value={data.contact_person}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.contact_person && touched.contact_person ? (
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
                              <strong>Error!</strong> {errors.contact_person}
                            </p>
                          ) : null}
                        </Col>
                      </Row>
                      <Row className="">
                        <Col xs={12} md={6}>
                          <CustomInputField
                            type="email"
                            id="plan_email"
                            placeholder="Email"
                            name="plan_email"
                            value={data.plan_email || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.plan_email && touched.plan_email ? (
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
                              <strong>Error!</strong> {errors.plan_email}
                            </p>
                          ) : null}
                        </Col>
                        <Col xs={12} md={6}>
                          <CustomInputField
                            type="text"
                            id="plan_phone"
                            placeholder="Phone"
                            name="plan_phone"
                            value={data.plan_phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.plan_phone && touched.plan_phone ? (
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
                              <strong>Error!</strong> {errors.plan_phone}
                            </p>
                          ) : null}
                        </Col>
                      </Row>
                      <Row className="">
                        <Col xs={12}>
                          <CustomInputField
                            type="textarea"
                            id="plan_goals"
                            placeholder="Plan Goals"
                            name="plan_goals"
                            rows={10}
                            resize="vertical"
                            value={data.plan_goals}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.plan_goals && touched.plan_goals ? (
                            <p
                              className="text-danger"
                              style={{ fontSize: "0.7rem" }}
                            >
                              <strong>Error!</strong> {errors.plan_goals}
                            </p>
                          ) : null}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </Container>
            </Row>
            <Row className="justify-content-end text-md-right text-center">
              <Col xs={12}>
                <Button type="button" className="custom-cancel-button">
                  Cancel
                </Button>
                <Button
                  // onClick={validateForm}
                  type="submit"
                  disabled={isSubmitting}
                  className="custom-submit-button"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
        {/*<Container>*/}
        {/*    */}
        {/*</Container>*/}
      </div>
    </>
  );
};

export default BasicForm;
