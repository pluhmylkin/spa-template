import React from 'react';
import { string } from 'prop-types';
import FooterIcon from './FooterIcon';

const Footer = ({ name, social }) => {
  return (
    <div>
      {new Date().getFullYear()} {name}{' '}
      {social.map(icon => (
        <FooterIcon icon={icon} />
      ))}
    </div>
  );
};

Footer.propTypes = {
  name: string.isRequired,
};

export default Footer;
