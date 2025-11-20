import { Navbar, Container, Nav, Button } from "react-bootstrap";
/* Rutas Link o NavLink y rutas externas <a/> */
import { Link, NavLink, useNavigate } from "react-router";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioLogueado(false);
    navegacion("/");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="fs-2">
            Crud Food
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={"/"} className={"nav-link"}>
                HOME
              </NavLink>
              {usuarioLogueado ? (
                <>
                  <NavLink to={"/administrador"} className={"nav-link"}>
                    Administrador
                  </NavLink>
                  <Button
                    className={"nav-link"}
                    variant="dark"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink to={"/login"} className={"nav-link"}>
                  LOGIN
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
