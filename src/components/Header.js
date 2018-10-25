import React from 'react';
import { string, shape, arrayOf} from 'prop-types';
import HeaderItem from './HeaderItem';


const Header = ({name, items}) => {
  return (
    <div>
      <h3>{name}</h3>
      {items.map(item => <HeaderItem item={item} />)}
    </div>
  );
};

Header.propTypes = {
  name: string.isRequired,
  items: arrayOf(shape({
    name: string,
    id: string
  })).isRequired
};

export default Header;