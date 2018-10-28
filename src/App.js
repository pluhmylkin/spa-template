import React, { Component } from 'react';
import Section from './components/Section';
import Header from './components/Header';

import { name, menu, social } from './cfg/data.json';
import Footer from './components/Footer';
class App extends Component {
  render() {
    const { items } = menu;
    return (
      <div>
        <Header name={name} items={items} />
        {items.map(item => (
          <Section item={item} />
        ))}
        <Footer name={name} social={social} />
      </div>
    );
  }
}

export default App;
