import React from 'react';
import { FaAddressCard, FaPhone, FaHome } from 'react-icons/fa';
import { shape, string, func } from 'prop-types';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

/**
 * Form for contacts
 */
const Contact = ({ item }) => {
  return (
    <Card id={item.id}>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardBody>
          <Row>
            <Col style={{ height: '200px', width: '200px' }}>Map will be here</Col>
            <Col>
              {item.address && (
                <div>
                  <FaHome /> {item.address}
                </div>
              )}
              {item.email && (
                <div>
                  <FaAddressCard /> {item.email}
                </div>
              )}
              {item.phone && (
                <div>
                  <FaPhone /> {item.phone}
                </div>
              )}
            </Col>
          </Row>
        </CardBody>
      </CardBody>
    </Card>
  );
};

Contact.propTypes = {
  item: shape({
    id: string,
    name: string,
    component: func,
    phone: string,
    email: string,
  }).isRequired,
};

export default Contact;
