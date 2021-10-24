import React from 'react';
import BootstrapButton, { ButtonProps } from 'react-bootstrap/Button';
import './Button.scss';

interface IButtonProps extends ButtonProps {

}

const Button = (props: IButtonProps) => (
  <BootstrapButton { ...props } />
);

export default Button;
