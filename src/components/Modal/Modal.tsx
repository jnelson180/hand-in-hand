import React from 'react';
import BootstrapModal, { ModalProps} from "react-bootstrap/Modal";
import './Modal.scss';

interface IModalProps extends ModalProps {};
const Modal = (props: IModalProps) => (
  <BootstrapModal { ...props } />
);

export default Modal;
