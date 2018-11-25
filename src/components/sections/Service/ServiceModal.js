import React from 'react';
import { shape, func, bool, string } from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BaseButton from '../../buttons/BaseButton';

const ServiceModal = ({ service, toggle, isOpen }) => (
  <Modal isOpen={isOpen} fade={false} toggle={toggle}>
    <ModalHeader toggle={toggle}>{service.name}</ModalHeader>
    <ModalBody>{service.description}</ModalBody>
    <ModalFooter>
      <BaseButton title="Cancel" onClick={toggle} />
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
