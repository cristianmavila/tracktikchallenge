import { useContext } from 'react'
import {
  Col,
  Container,
  Dropdown,
  Navbar,
  Offcanvas,
  Nav,
} from 'react-bootstrap'
import ProfileContext from '../../../contexts/profile'
import defaultUserImage from '../../../assets/images/user-profile.svg'

const Header = ({ children }: { children: React.ReactNode }) => {
  const { avatar, username } = useContext(ProfileContext)
  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      className="bg-primary text-white py-0"
    >
      <div className="w-100">
        <Container className="d-flex justify-content-center flex-row">
          <Col xs={4}>
            <Navbar.Toggle
              className="d-block my-2"
              aria-controls="offcanvasNavbar"
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/sites">Sites</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Navbar.Brand className="text-center ms-1 me-1">
              <strong className="h3">Scheduling</strong>
            </Navbar.Brand>
          </Col>
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {avatar ? (
                  <img
                    className="rounded-circle"
                    width={35}
                    height={35}
                    onError={e => {
                      e.currentTarget.src = defaultUserImage
                    }}
                    src={avatar}
                    alt={username}
                  />
                ) : (
                  username
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Container>
        <Container fluid className="border-top border-white px-0">
          {children}
        </Container>
      </div>
    </Navbar>
  )
}

export default Header
