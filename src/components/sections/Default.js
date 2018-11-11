import React from 'react';
import { string, shape, func } from 'prop-types';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Default = ({ item }) => (
  <Card id={item.id}>
    <CardBody>
      <CardTitle>{item.name}</CardTitle>
      <CardText>{item.body}</CardText>
    </CardBody>
  </Card>
);

Default.propTypes = {
  item: shape({
    id: string,
    name: string,
    body: string,
    component: func,
  }).isRequired,
};

export default Default;
