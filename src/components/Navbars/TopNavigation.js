import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

import routes from "../../routes";

// Assets Imports
import pp from "../../assets/img/mike.jpg";
import AuthContext from "context/AuthProvider";

function TopNavigation(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  const getBrand = () => {
    let brandName = "Default Brand";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor(color);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const getAuthToken = localStorage.getItem("token");

  // const handleLogout = () => {
  //   dispatch(logout());
  //   if (!getAuthToken) {
  //     navigate("/");
  //   }
  // };

  // From YouTube
  const { setAuth, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    localStorage.removeItem("auth");
    navigate("/formity-frontend/login");
  };
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar expand="lg" className="top-navigation" color={"secondary"}>
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/formity-frontend">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
            >
              <DropdownToggle
                nav
                className="d-flex flex-row align-items-center"
              >
                <div>
                  <img
                    className="rounded-circle mr-2"
                    src={pp}
                    height={50}
                    width={50}
                    alt="Profile Pic"
                  />
                </div>
                <i class="fa-solid fa-chevron-down"></i>
                <p>
                  <span className="d-lg-none d-md-block"></span>
                </p>
              </DropdownToggle>
              <DropdownMenu right className="main-dropdown">
                <DropdownItem className="pe-auto" href="#" tag="a">
                  Profile
                </DropdownItem>
                <DropdownItem className="pe-auto" href="#" tag="a">
                  Settings
                </DropdownItem>
                <DropdownItem className="pe-auto" tag="button" onClick={logout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavigation;
