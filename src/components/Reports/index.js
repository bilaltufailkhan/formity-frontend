import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import docImg from "../../assets/img/aaa-temp.jpg";
import axios from "axios";
import { api } from "utils/constants";

const ReportsView = () => {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(`${api}/get-forms`);
        setForms(response?.data?.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="py-4 px-3">
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Select a template</h3>
            </Col>
          </Row>
          <Row>
            {forms?.map((data) => (
              <Col lg={4} key={data.id}>
                <Link className="nav-link" to={"/temp/" + data.id}>
                  <Card className="reports-card">
                    <CardBody>
                      <CardImg className="responsive" src={docImg} />
                      <p>{data.name}</p>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ReportsView;
