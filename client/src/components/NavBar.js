import React, { useState } from "react";

import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import { useSelector } from "react-redux";

export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const { isAuthenticated } = useSelector(state => state.authReducer);
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Pomodore Events</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? (
                <NavItem>
                  <Logout />
                </NavItem>
              ) : (
                <NavItem>
                  <RegisterModal />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
