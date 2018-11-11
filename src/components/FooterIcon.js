import React from 'react';
import { string, shape, func } from 'prop-types';

const FooterIcon = ({ icon }) => (
  <a href={icon.link} target="_blank" title={icon.name}>
    <icon.icon />
  </a>
);

FooterIcon.propTypes = {
  icon: shape({
    link: string,
    name: string,
    icon: func,
  }),
};

export default FooterIcon;
