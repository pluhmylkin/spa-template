import React from 'react';
import { string } from 'prop-types';
import BaseButton from '../../buttons/BaseButton';

const ServiceLink = ({ link, name }) => (
  <a href={link}>
    <BaseButton title={name} />
  </a>
);

ServiceLink.propTypes = {
  link: string.isRequired,
  name: string.isRequired,
};

export default ServiceLink;
