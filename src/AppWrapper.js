import App from "App";
import React from "react";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "store";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App isAuthenticated />
    </Provider>
  );
};

export default AppWrapper;
