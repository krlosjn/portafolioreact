import React from 'react';
import { Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Menu =() => {

    const history=useHistory();

    const sendCv=()=>{
        history.push('/curriculum');
    }

    return ( 
        <div>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
                    <Container>
                        <Link to='presentacion'>
                            <Navbar.Brand >Inico</Navbar.Brand>
                        </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        <Link to='acercaMi'>
                            <Nav.Link href="#">Acerca de mí</Nav.Link>
                        </Link>

                        <Link to='contacto'>
                            <Nav.Link href="#">Contacto</Nav.Link>
                        </Link>

                        <NavDropdown title="CV" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={sendCv} >CV html</NavDropdown.Item>
                            <NavDropdown.Item href="#">CV pdf</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>

    );
}
 
export default Menu;






























