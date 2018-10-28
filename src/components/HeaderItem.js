import React from 'react';
import { shape, string } from 'prop-types';
import { NavLink } from 'reactstrap';

const HeaderItem = ({ item }) => {
  switch (item.header) {
    case 'Dropdown':
      return '';
    default:
      return <NavLink href={`#${item.id}`}>{item.name}</NavLink>;
  }
};

HeaderItem.propTypes = {
  item: shape({
    name: string.isRequired,
    id: string.isRequired,
  }).isRequired,
};

export default HeaderItem;
