/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, NavLink as RRNavLink, Link } from 'react-router-dom';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  DropdownItem
} from 'reactstrap';

const NavLinkRoute = ({ to, ...rest }) => (
  <Route path={to}>
    {({ match }) => (
      <NavItem active={match && match.isExact}>
        <NavLink to={to} {...rest} tag={RRNavLink} activeClassName="active" />
      </NavItem>
    )}
  </Route>
);

NavLinkRoute.propTypes = { to: PropTypes.string.isRequired };

/*
export default () => (
  <Navbar>
    <NavbarBrand tag={Link} to="/">
      HOME IMG
    </NavbarBrand>
    <Nav
      className={[styles.navbar, styles['navbar-light'], styles['bg-light']]}
    >
      <NavLinkRoute to="/" tag={RRNavLink}>
        Home
      </NavLinkRoute>
      <NavLinkRoute to="/catalog" tag={RRNavLink}>
        Catalog
      </NavLinkRoute>
      <NavLinkRoute to="/about">About</NavLinkRoute>
      <NavLinkRoute to="/500">500</NavLinkRoute>
      <NavLinkRoute to="/401">401</NavLinkRoute>
      <NavLinkRoute to="/some-route-which-does-not-exist">
        Not Found
      </NavLinkRoute>
    </Nav>
  </Navbar>
);
*/

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/" tag={Link}>
          Zusa
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLinkRoute to="/" tag={RRNavLink}>
              Home
            </NavLinkRoute>
            <NavLinkRoute to="/catalog" tag={RRNavLink}>
              Catalog
            </NavLinkRoute>
            <NavLinkRoute to="/about">About</NavLinkRoute>
            <NavLinkRoute to="/500">500</NavLinkRoute>
            <NavLinkRoute to="/401">401</NavLinkRoute>
            <NavLinkRoute to="/some-route-which-does-not-exist">
              Not Found
            </NavLinkRoute>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
