import React from 'react';
import { shape, string } from 'prop-types';
import { NavLink } from 'reactstrap';

const HeaderItem = ({ item }) => {
  if (item.name) {
    switch (item.headerType) {
      case 'Dropdown':
        return '';
      default:
        return <NavLink href={`#${item.id}`}>{item.name}</NavLink>;
    }
  }
  return '';
};

HeaderItem.propTypes = {
  item: shape({
    name: string,
    id: string.isRequired,
  }).isRequired,
};

export default HeaderItem;
