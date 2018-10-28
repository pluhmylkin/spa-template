import React from 'react';
import { string, shape } from 'prop-types';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Default = ({ item }) => {
  return (
    <Card id={item.id}>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.body}</CardText>
      </CardBody>
    </Card>
  );
};

Default.propTypes = {
  item: shape({
    name: string,
    id: string,
  }).isRequired,
};

export default Default;
