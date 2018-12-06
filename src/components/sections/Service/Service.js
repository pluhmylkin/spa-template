import React from 'react';
import { IoIosPlay } from 'react-icons/io';
import { shape, string, arrayOf, func } from 'prop-types';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import ServiceModal from './ServiceModal';
import ServiceLink from './ServiceLink';

const Service = ({ item }) => (
  <Card id={item.id}>
    <CardBody>
      <CardTitle>{item.name}</CardTitle>
      <Row>
        {item.services.map(service => (
          <Col xs="6" key={service.name}>
            {service.img && <img width="100%" src={service.img} alt={service.name} />}
            <CardBody>
              <CardTitle>{service.name}</CardTitle>
              <CardText>{service.shortDescription}</CardText>
              {(service.link && <ServiceLink link={service.link} name={<IoIosPlay />} />) || (
                <ServiceModal service={service} />
              )}
            </CardBody>
          </Col>
        ))}
      </Row>
    </CardBody>
  </Card>
);

Service.propTypes = {
  item: shape({
    id: string,
    name: string,
    component: func,
    services: arrayOf(
      shape({
        shortDescription: string,
        description: string,
        name: string,
        img: string,
      })
    ),
  }).isRequired,
};

export default Service;
