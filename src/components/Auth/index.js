import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../store/actions/auth";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";

import { useSelector } from "react-redux";
import useAuth from "hooks/useAuth";
import { api } from "utils/constants";
import axios from "axios";

const LoginPage = ({ login }) => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // // const navigate = useNavigate();
  // const { email, password } = formData;

  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // // const isAuthenticated = useSelector((state) => state.auth);
  // const isAuthenticated = localStorage.getItem("token");

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   login(email, password);
  //   // console.log("This is response object: ", isAuthenticated);
  //   navigate("/admin/dashboard");
  // };

  // From YouTube
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/", { replace: true });
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${api}/login`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(JSON.stringify(response?.data?.data));
      const accessToken = response?.data?.data?.token;
      const roles = response?.data?.data?.role;
      setAuth({ email, password, roles, accessToken });
      localStorage.setItem(
        "auth",
        JSON.stringify({ email, password, roles, accessToken })
      );
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  // From YouTube End

  return (
    <>
      <div className="login-page">
        <Container fluid>
          <Row className="d-flex vh-100 align-items-center justify-content-center text-center">
            <Col lg={4}>
              <Card className="login-card">
                <CardHeader>
                  <h5>Login</h5>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                </CardHeader>
                <CardBody>
                  <Form
                    // onSubmit={onSubmit}
                    onSubmit={handleSubmit}
                  >
                    <Input
                      type="email"
                      name="email"
                      ref={userRef}
                      placeholder="Enter your Email"
                      // onChange={onChange}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      // onChange={onChange}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <Button className="btn btn-block">Sign In</Button>
                    <span className="text-muted">
                      Forgot your password? <a href="/">Request a New</a>
                    </span>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   token: state.auth.token,
//   error: state.auth.error,
//   authenticated: state.auth.authenticated,
//   statusLogout: state.auth.statusLogout,
// });

// const mapDispatchToProps = (dispatch) => ({
//   loginHandler: (email, pass) => dispatch(login(email, pass)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

// export default connect(null, { login })(LoginPage);
export default LoginPage;
