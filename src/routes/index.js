import LoginPage from "components/Auth";
import AssistiveTech from "views/AssistiveTech";
import Community from "views/Community";
import Dashboard from "views/Dashboard.js";
import Reports from "views/Reports";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "nc-icon nc-bank",
    component: Reports,
    layout: "/admin",
  },
  {
    path: "/assistive-technologies",
    name: "Assistive Technologies",
    icon: "nc-icon nc-bank",
    component: AssistiveTech,
    layout: "/admin",
  },
  {
    path: "/community",
    name: "Community",
    icon: "nc-icon nc-bank",
    component: Community,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "nc-icon nc-bank",
    component: LoginPage,
    layout: "/auth",
  },
];
export default routes;
