import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import AppRoute from "./index";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "components/Auth";

function MainRoute(props) {
  const { authenticated } = props;
  console.log("Main Route :", authenticated);
  return (
    <BrowserRouter basename={authenticated ? "/Jordina" : ""}>
      {authenticated ? (
        <AppRoute />
      ) : (
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          {/* <Route path="*" element={<Navigate to="/Jordina" />} /> */}
        </Routes>
      )}
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MainRoute);
