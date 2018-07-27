/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavItem = styled.div`
  padding: 10px 10px 10px 0;
  margin-right: 5px;
  font-size: 1em;
  ${StyledLink} {
    font-weight: bold;
    color: ${props => (props.active ? '#46b0ed' : '#515f71')};
    transition: color 1s ease;
  }
`;

// type Props = { to: String };

const NavLink = ({ to, ...rest }) => (
  <Route path={to}>
    {({ match }) => (
      <NavItem active={match && match.isExact}>
        <StyledLink to={to} {...rest} />
      </NavItem>
    )}
  </Route>
);

NavLink.propTypes = { to: PropTypes.string.isRequired };

export default () => (
  <div>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/500">500</NavLink>
      <NavLink to="/401">401</NavLink>
      <NavLink to="/some-route-which-does-not-exist">Not Found</NavLink>
    </Nav>
  </div>
);
