import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import Community from "views/Community";
import AssistiveTech from "views/AssistiveTech";
import NotFound from "views/NotFound";
import LoginPage from "components/Auth";
import Main from "layouts/Main";
import RequireAuth from "components/RequireAuth";
import Reports from "views/Reports";
import Continence from "components/Reports/Continence";
import AnimalAssesment from "components/Reports/AnimalAssesment";

const App = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));

  useEffect(() => {
    if (auth) {
      setAuth(JSON.parse(localStorage.getItem("auth")));
    }
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login", { replace: true });
    }
  }, [auth, navigate]);

  const ROLES = {
    User: "user",
  };

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {/* public routes */}
        <Route path="login" element={<LoginPage />} />

        {/* we want to protect these routes */}
        <Route
          element={<RequireAuth allowedRoles={[ROLES.User]} auth={auth} />}
        >
          <Route path="/" element={<AdminLayout />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/community" element={<Community />} />
          <Route path="/assistive-technologies" element={<AssistiveTech />} />
          <Route path="/temp/:id" element={<Continence />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
