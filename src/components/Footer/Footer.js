import React from 'react';
import { string, func, arrayOf, shape, number } from 'prop-types';
import { Row, Col } from 'reactstrap';
import styled from 'react-emotion';
import FooterIcon from './FooterIcon';

const Style = styled('section')`
  margin: 15px;
`;
const Footer = ({ name, social, footer }) => (
  <Style>
    <Row>
      <Col>
        {new Date().getFullYear()}
        {` ${name}`}
      </Col>
      {social.map(icon => (
        <Col key={icon.name}>
          <FooterIcon icon={icon} />
        </Col>
      ))}
    </Row>
    <Row>
      <Col>
        {footer.inn && (
          <span>
            <b>ИНН:</b>
            {` ${footer.inn}`}
          </span>
        )}
        {footer.ogrn && (
          <span>
            <b> ОГРН:</b>
            {` ${footer.ogrn}`}
          </span>
        )}
      </Col>
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
  ).isRequired,
  footer: shape({
    inn: number,
    ogrn: number,
  }),
};

Footer.defaultProps = {
  footer: {
    inn: null,
    ogrn: null,
  },
};

export default Footer;
