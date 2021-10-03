import React from 'react';
import { Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Curriculum from '../pages/Curriculum';
  


class Menu extends React.Component{

    render(){
        return(
            <div>
                <header>
                <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand as={Link}  exact to="/aboutme">Acerca de mí</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#features">Proyectos</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                        <NavDropdown title="CV" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/cv">CV html</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">CV pdf</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Switch>
                    <Route path="/aboutme">
                        <AboutMe/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/cv">
                        <Curriculum/>
                    </Route>

                </Switch>

                </Router>
                </header>
            </div>
        );
    }
}

export default Menu;