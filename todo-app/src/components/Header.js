import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">TaskMasker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to='/about'>
                                <NavLink href="/components/contactform">About</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contactform">
                                <NavLink href="/components/contactform">Contact Me</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/">
                                <NavLink href="/components/App.js">Tasks</NavLink>
                            </Link>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to TaskMasker</h1>
                                <p>
                                    Helping with your Tasking needs.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;