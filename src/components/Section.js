import React from 'react';
import { string, shape } from 'prop-types';

const Section = ({ item }) => {
  return (
    <div id={item.id}>
      <h2>{item.name}</h2>
    </div>
  );
};

Section.propTypes = {
  item: shape({
    name: string,
    id: string,
  }).isRequired,
};

export default Section;
