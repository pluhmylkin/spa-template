import React from 'react';
import { string, shape } from 'prop-types';
import Default from './sections/Default';

const Section = ({ item }) => {
  switch (item.section) {
    case 'value':
      break;
    default:
      return <Default item={item} />;
  }
};

Section.propTypes = {
  item: shape({
    name: string,
    id: string,
  }).isRequired,
};

export default Section;
