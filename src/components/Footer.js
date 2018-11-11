import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import FooterIcon from './FooterIcon';
import { Row, Col } from 'reactstrap';

const Footer = ({ name, social }) => {
  return (
    <Row>
      <Col>
        {new Date().getFullYear()} {name}
      </Col>
      {social.map(icon => (
        <Col key={icon.name}>
          <FooterIcon icon={icon} />
        </Col>
      ))}
    </Row>
  );
};

Footer.propTypes = {
  name: string.isRequired,
  social: arrayOf(shape({
    link: string,
    name: string,
    icon: func,
  })),
};

export default Footer;
