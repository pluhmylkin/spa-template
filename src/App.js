import React, { Component } from 'react';
import Section from './components/Section';
import Header from './components/Header';

import { name, body, social } from './cfg/data.json';
import Footer from './components/Footer';
import { Container } from 'reactstrap';
class App extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { sections } = body;
    const { isOpen } = this.state;
    return (
      <Container>
        <Header name={name} items={sections} isOpen={isOpen} toggle={this.toggle} />
        {sections.map(item => (
          <Section item={item} />
        ))}
        <Footer name={name} social={social} />
      </Container>
    );
  }
}

export default App;
