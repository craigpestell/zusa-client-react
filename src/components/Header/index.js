import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../BlockContainer';
import Navbar from '../Navbar';
import config from '../../config';

/*
color: $color-white;

  .header {
    overflow: auto;
    padding: 15px;

    img {
      float: left;
      height: 70px;
      margin-right: 1em;
    }
  }

  hr {
    margin-bottom: 0;
    margin-top: 0;
    opacity: 0.15;
  }
 */
const Header = styled.div`
  overflow: auto;
  padding: 15px;
`;
const Logo = styled.img`
  float: left;
  height: 70px;
  margin-right: 1em;
`;

const Hr = styled.hr`
  margin-bottom: 0;
  margin-top: 0;
  opacity: 0.15;
`;

const Heading = styled.h1`
  color: #303233;
  font-size: 2em;
  padding: 0;
  margin: 0 0 16px;
  line-height: 1;
`;

const Subheading = styled.h3`
  color: #515f71;
  font-weight: 100;
  opacity: 0.7;
  padding: 0;
  padding-bottom: 4px;
  margin: 0;
  line-height: 1;
`;

const BuiltWith = styled.p`
  color: #46b0ed;
  font-size: 1em;
  text-align: left;
  margin-bottom: 0;
`;

const BuiltHeader = ({ className }) => (
  <Container>
    <Header className={className}>
      <Logo
        src={require('../../app/assets/logo.svg')}
        alt="Logo"
        role="presentation"
      />
      <Hr />
      <Heading>{config.app.title}</Heading>
      <Subheading>{config.app.subHeading}</Subheading>
      <Navbar />
      <BuiltWith>React 16+, React Router 4+, Webpack 3+</BuiltWith>
    </Header>
  </Container>
);

BuiltHeader.defaultProps = {
  className: 'header-outer'
};

BuiltHeader.propTypes = {
  className: PropTypes.string
};
export default BuiltHeader;
