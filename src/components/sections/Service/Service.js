import React, { PureComponent } from 'react';
import { shape, string, arrayOf, func } from 'prop-types';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import ServiceModal from './ServiceModal';
import ServiceLink from './ServiceLink';
import BaseButton from '../../buttons/BaseButton';

class Service extends PureComponent {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    const { isOpenModal } = this.state;
    this.setState({ isOpenModal: !isOpenModal });
  };

  render() {
    const { item } = this.props;
    const { isOpenModal } = this.state;
    return (
      <Card id={item.id}>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <Row>
            {item.services.map(service => (
              <Col key={service.name}>
                {service.img && <img width="100%" src={service.img} alt={service.name} />}
                <CardBody>
                  <CardText>{service.shortDescription}</CardText>
                  {(service.link && <ServiceLink link={service.link} name={service.name} />) || (
                    <div>
                      <BaseButton title={service.name} onClick={this.toggleModal} />
                      <ServiceModal
                        service={service}
                        toggle={this.toggleModal}
                        isOpen={isOpenModal}
                      />
                    </div>
                  )}
                </CardBody>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    );
  }
}

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
