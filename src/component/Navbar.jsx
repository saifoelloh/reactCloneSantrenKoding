import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap';
import Aux from '../hoc/Auxilary.jsx'

export default class NavBar extends React.Component {
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
                <Navbar color="light" light expand="md">
                    <Aux>
                        <NavbarBrand>
                            <img src="http://i63.tinypic.com/oid9xu.png" style={{width: "50px"}} alt=""/>
                        </NavbarBrand>
                        <NavbarBrand href="/">Santren Koding</NavbarBrand>
                    </Aux>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="my-auto">
                                <NavLink href="/components/">Home</NavLink>
                            </NavItem>
                            <NavItem className="my-auto">
                                <NavLink href="https://github.com/reactstrap/reactstrap">Kajian Koding</NavLink>
                            </NavItem>
                            <NavItem className="my-auto">
                                <NavLink href="">Santren Kilat</NavLink>
                            </NavItem>
                            <NavItem className="my-auto">
                                <NavLink href="">Mondok</NavLink>
                            </NavItem>
                            <NavItem className="my-auto">
                                <NavLink href="">Tentang Kami</NavLink>
                            </NavItem>
                            <NavItem className="my-auto">
                                <NavLink href="">Santren Kilat</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Button outline color="primary">Login/Signup</Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

