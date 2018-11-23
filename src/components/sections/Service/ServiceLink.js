import React from 'react';
import { string } from 'prop-types';

const ServiceLink = ({ link, name }) => <a href={link}>{name}</a>;

ServiceLink.propTypes = {
  link: string.isRequired,
  name: string.isRequired,
};

export default ServiceLink;
