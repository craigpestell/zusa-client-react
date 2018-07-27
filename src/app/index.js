/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import styled, { injectGlobal } from 'styled-components';
import config from '../config';
// Import your global styles here
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import './styles.scss';
import Header from '../components/Header';

// ========================
// GLOBAL STYLES
// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  *{
    box-sizing: border-box;
  }
  html, body{
    height : 100%;
    color: #333;
  }
  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    height : 100%;
  }
  #app {
    height : 100%;
  }
`;
// ========================

const StyledHeader = styled(Header)`
  align-content: flex-start;
`;

type Props = { route: Object };

const AppWrapper = styled.div`
  color: $color-white;
`;
const App = ({ route }: Props) => (
  <AppWrapper>
    <Helmet {...config.app} />
    <StyledHeader {...config.app} />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </AppWrapper>
);

export default hot(module)(App);
