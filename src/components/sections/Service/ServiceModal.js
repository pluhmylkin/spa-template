import React, { PureComponent } from 'react';
import { IoIosPlay } from 'react-icons/io';
import { shape, string } from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BaseButton from '../../buttons/BaseButton';

class ServiceModal extends PureComponent {
  state = {
    isOpen: false,
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { service } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <BaseButton title={<IoIosPlay />} onClick={this.toggle} />
        <Modal isOpen={isOpen} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{service.name}</ModalHeader>
          <ModalBody>
            {service.description}
            {service.list && (
              <ul>
                {service.list.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            )}
          </ModalBody>
          <ModalFooter>
            <BaseButton title="Cancel" onClick={this.toggle} />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ServiceModal.propTypes = {
  service: shape({
    description: string,
    name: string,
  }).isRequired,
};

export default ServiceModal;
