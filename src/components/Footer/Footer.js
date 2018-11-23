import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import FooterIcon from './FooterIcon';
import { Row, Col } from 'reactstrap';
import styled from 'react-emotion';

const Style = styled('section')`
  margin: 15px;
`;
const Footer = ({ name, social }) => (
  <Style>
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
  </Style>
);

Footer.propTypes = {
  name: string.isRequired,
  social: arrayOf(
    shape({
      link: string,
      name: string,
      icon: func,
    })
  ),
};

export default Footer;
