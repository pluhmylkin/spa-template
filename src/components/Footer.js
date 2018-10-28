import React from 'react';
import { string } from 'prop-types';
import FooterIcon from './FooterIcon';
import { Row, Col } from 'reactstrap';

const Footer = ({ name, social }) => {
  return (
    <Row>
      <Col>
        {new Date().getFullYear()} {name}
      </Col>
      {social.map(icon => (
        <Col>
          <FooterIcon icon={icon} />
        </Col>
      ))}
    </Row>
  );
};

Footer.propTypes = {
  name: string.isRequired,
};

export default Footer;
