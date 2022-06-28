import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BRAND_NAME, PHONE_NUMBER, LANGUAGES } from '../constants/brand';

export const NavigationBar = ({ t, i18n }) => {
  const currentLanguage = LANGUAGES.find(lang => lang === i18n.language);

  return (
    <>
      <Navbar className="bg-dark" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="brand-name fw-bold">{t(BRAND_NAME)}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#cars">{t("cars")}</Nav.Link>
              <Nav.Link href="#cargo">{t("cargo")}</Nav.Link>
              <Nav.Link href="#about">{t("aboutUs")}</Nav.Link>
              <Nav.Link href="#contact">{t("contact")}</Nav.Link>

            </Nav>
            <Nav>
              <p
                className="text-light mb-0 d-flex align-items-center justify-content-center"
              >
                {PHONE_NUMBER}
              </p>
              <NavDropdown
                title={t(currentLanguage)}
                id="collasible-nav-dropdown"
              >
                {
                  LANGUAGES.map((locale, index) => {
                    return (
                      <NavDropdown.Item
                        key={index}
                        as="button"
                        onClick={() => i18n.changeLanguage(locale)}
                      >
                        {t(locale)}
                      </NavDropdown.Item>
                    );
                  })
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};