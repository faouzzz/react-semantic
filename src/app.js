import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

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

export default App;