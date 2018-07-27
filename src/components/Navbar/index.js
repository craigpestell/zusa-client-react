/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, NavLink as RRNavLink, Link } from 'react-router-dom';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import styles from '../../app/styles.scss';

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

export default () => (
  <Navbar>
    <NavbarBrand tag={Link} to="/">
      HOME IMG
    </NavbarBrand>
    <Nav className="ml-auto navbar">
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
