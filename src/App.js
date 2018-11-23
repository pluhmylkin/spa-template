import React, { Component } from 'react';
import { Container } from 'reactstrap';
import styled from 'react-emotion';
import data from './cfg/fullExample';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Section = styled('section')`
  padding: 15px 0;
`;
class App extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
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
          <Section>
            <item.component key={item.id} item={item} />
          </Section>
        ))}
        <Footer name={name} social={social} />
      </Container>
    );
  }
}

export default App;
