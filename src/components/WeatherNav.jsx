import { Container, Nav, Navbar } from "react-bootstrap";
import { CloudSunFill, Gear, ListTask } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const WeatherNav = () => {
  return (
    <header>
      <Navbar expand="md" className="">
        <Container fluid className="d-md-flex flex-column gap-4 p-0 py-3">
          <Link to="/">
            <img
              src="/assets/images/logoWeather.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-md-flex flex-column gap-4 align-items-center">
              <Link to="/Weather" className="nav-link text-center">
                <CloudSunFill className="mb-3" />
                <p>Weather</p>
              </Link>
              <Link to="/Cities" className="nav-link text-center">
                <ListTask className="mb-3" />
                <p>Cities</p>
              </Link>
              <Link to="/Settings" className="nav-link text-center">
                <Gear className="mb-3" />
                <p>Settings</p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default WeatherNav;
