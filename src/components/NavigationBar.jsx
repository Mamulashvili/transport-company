import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


export const NavigationBar = () => {
  return (
    <>
      <Navbar className="bg-dark" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="brand-name fw-bold">ბრენდის სახელი</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#cars">ავტომობილები</Nav.Link>
              <Nav.Link href="#cargo">ტვირთები</Nav.Link>
              <Nav.Link href="#about">ჩვენ შესახებ</Nav.Link>
              <Nav.Link href="#contact">კონტაქტი</Nav.Link>

            </Nav>
            <Nav>
              <NavDropdown title="ქართული" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ქართული</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">გერმანული</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ინგლისური</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">რუსული</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};