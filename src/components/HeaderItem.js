import React from 'react';
import { shape, string } from 'prop-types';

const HeaderItem = ({ item }) => {
  return <a href={`#${item.id}`}> {item.name}</a>;
};

HeaderItem.propTypes = {
  item: shape({
    name: string.isRequired,
    id: string.isRequired,
  }).isRequired,
};

export default HeaderItem;
