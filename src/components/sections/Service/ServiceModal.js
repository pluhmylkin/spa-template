import React from 'react';
import { shape, func, bool, string } from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ServiceModal = ({ service, toggle, isOpen }) => (
  <Modal isOpen={isOpen} fade={false} toggle={toggle}>
    <ModalHeader toggle={toggle}>{service.name}</ModalHeader>
    <ModalBody>{service.description}</ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

ServiceModal.propTypes = {
  service: shape({
    description: string,
    name: string,
  }).isRequired,
  toggle: func.isRequired,
  isOpen: bool.isRequired,
};

export default ServiceModal;
