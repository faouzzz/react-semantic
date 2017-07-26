import 'jquery';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'
import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './navigation'
import Content from './content'
import Footer from './footer'

const App = () => (
  <Container fluid>
    <Navigation />
    <Content />
    <Footer />
  </Container>
)

ReactDOM.render(
  React.createElement(App),
  document.getElementById('main')
);