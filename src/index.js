import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
// import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "react-toastify/dist/ReactToastify.css";

import AppWrapper from "AppWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/formity-frontend">
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<AppWrapper />} />
      </Routes>
    </AuthProvider>
    {/* <AppWrapper /> */}
  </BrowserRouter>
);
