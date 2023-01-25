import useAuth from "hooks/useAuth";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";

const RequireAuth = (props) => {
  const { auth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  //   console.log("Auth Check: ", auth?.isAuthenticated);
  return auth?.roles == "user" || auth ? (
    //   ?.find((role) => props.allowedRoles?.includes(role))
    <Outlet />
  ) : (
    //   auth?.user ? (
    //     <Navigate to="/unauthorized" state={{ from: location }} replace />
    //   ) :
    <Navigate to="/login" state={{ from: location }} replace />
  );
  //   if (auth && auth.roles === "user") {
  //     return <Outlet />;
  //   } else {
  //     navigate("/login", { state: { from }, replace: true });
  //     return null;
  //   }
};

export default RequireAuth;
