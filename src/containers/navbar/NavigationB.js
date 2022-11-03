import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import './navigationB.css';

const NavigationB = () => {
  return (
    <Navbar className='navbarGradient' bg="light" expand="lg">
        <Container >
            <Navbar.Brand href="#home">BAKI Renovations</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link >Kitchen</Nav.Link>
                <Nav.Link >Bathroom</Nav.Link>
                <Nav.Link >Basement</Nav.Link>
                <Nav.Link >Flooring</Nav.Link>
                <Nav.Link >Staircase</Nav.Link>
                <Nav.Link >Painting</Nav.Link>
                <NavDropdown title="Other Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Custom Epoxy tables</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Handyman
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Plumbing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Electrical</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Apply for a Job
                </NavDropdown.Item>
                </NavDropdown>
                <Button variant="primary">Text us</Button>{' '}
                <p><h6>Call (819) 329 - 3107</h6></p>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavigationB