import React, { Component } from 'react';
import { Route, NavLink as RRNavLink, Link } from 'react-router-dom';
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

import Container from '../BlockContainer/BlockContainer';

import config from '../../utils/config';
import * as AuthService from '../../utils/AuthService';
import './Header.css';

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

class HeaderView extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
      profile: PropTypes.object,
      error: PropTypes.object
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
    logoutSuccess: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      isOpen: true
    };
  }

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }
  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); // careful, this is a static method
    this.props.history.push({ pathname: '/' });
  };

  render() {
    const { auth } = this.props;
    return (
      <div>
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
            {!auth.isAuthenticated && (
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.handleLoginClick}
              >
                Log In
              </Button>
            )}
            {auth.isAuthenticated && (
              <Button onClick={this.handleLogoutClick}>
                Log Out
              </Button>
            )}
          </Nav>
        </Collapse>
      </Navbar>
        {auth.isAuthenticated ? (
          <div>
            <img src={auth.profile.picture} height="40px" alt="profile" />
            <span>Welcome, {auth.profile.nickname}</span>
            <button onClick={this.handleLogoutClick}>Logout</button>
          </div>
        ) : (
            <button onClick={this.handleLoginClick}>Login</button>
          )}
        {auth.error && <p>{JSON.stringify(auth.error)}</p>}
      </div>
    );
  }
}

export default HeaderView;
