import React, { Component } from 'react';
import Header from './components/Header/Header';

import data from './cfg/data';
import Footer from './components/Footer/Footer';
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
    const { name, body, social } = data;
    const { sections } = body;
    const { isOpen } = this.state;
    return (
      <Container>
        <Header name={name} items={sections} isOpen={isOpen} toggle={this.toggle} />
        {sections.map(item => (
          <item.component key={item.id} item={item} />
        ))}
        <Footer name={name} social={social} />
      </Container>
    );
  }
}

export default App;
