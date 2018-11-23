import React from 'react';
import { string, shape, arrayOf, bool, func } from 'prop-types';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import HeaderItem from './HeaderItem';

const Header = ({ name, items, isOpen, toggle }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">{name}</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        {items.map(item => (
          <NavItem key={item.id}>
            <HeaderItem item={item} />
          </NavItem>
        ))}
      </Nav>
    </Collapse>
  </Navbar>
);

Header.propTypes = {
  name: string.isRequired,
  items: arrayOf(
    shape({
      name: string,
      id: string,
    })
  ).isRequired,
  isOpen: bool.isRequired,
  toggle: func.isRequired,
};

export default Header;
