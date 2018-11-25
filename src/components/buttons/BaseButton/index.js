import React from 'react';
import { string, func, bool } from 'prop-types';
import { Button } from 'reactstrap';

const propTypes = {
  title: string.isRequired,
  onClick: func,
  disabled: bool,
};

const defaultProps = {
  onClick: () => {},
  disabled: false,
};

const BaseButton = ({ title, onClick, disabled }) => (
  <Button color="secondary" disabled={disabled} onClick={onClick}>
    {title}
  </Button>
);

BaseButton.propTypes = propTypes;
BaseButton.defaultProps = defaultProps;

export default BaseButton;
