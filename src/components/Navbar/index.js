/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, NavLink as RRNavLink, Link } from 'react-router-dom';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Button,
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
// import AuthCallbackPage from '../AuthCallbackPage/AuthCallbackPage';

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

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: true
    };
    const {isAuthenticated} = this.props;
    this.isAuthenticated = isAuthenticated;
    
    const {handleLogin} = this.props;
    const {handleLogout} = this.props;

    this.handleLogin = handleLogin;
    this.handleLogout = handleLogout;
  }

  componentDidMount = () => {
    
  };

  /* login = () => {
    if (this.auth) {
      this.auth.login();
    }
  };

  logout = () => {
    if (this.auth) {
      this.auth.logout();
    }
  }; 

  // eslint-disable-next-line no-unused-vars
  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth.handleAuthentication();
    }
  };
  */

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render = () => {
    // eslint-disable-next-line react/prop-types
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/" tag={Link}>
          Zusa
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLinkRoute to="/" tag={RRNavLink} auth={this.auth}>
              Home
            </NavLinkRoute>
            
            <NavLinkRoute to="/catalog" tag={RRNavLink} auth={this.auth}>
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
            {!this.isAuthenticated && (
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.handleLogin}
              >
                Log In
              </Button>
            )}
            {this.isAuthenticated && (
              <Button onClick={this.handleLogut}>
                Log Out
              </Button>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
MyNavbar.defaultProps = {
  isAuthenticated: false
}
MyNavbar.propTypes = { isAuthenticated: PropTypes.bool };

/* 
{!this.auth.isAuthenticated() && (
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login}
              >
                Log In
              </Button>
            )}
            {this.auth.isAuthenticated() && (
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout}
              >
                Log Out
              </Button>
            )}
*/
export default MyNavbar;
