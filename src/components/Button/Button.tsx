import React from 'react';
import BootstrapButton, { ButtonProps } from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Button.scss';

interface IButtonProps extends ButtonProps {
  to?: string;
}

const Button = (props: IButtonProps) => {
  let ButtonToRender: React.ReactElement | null = <BootstrapButton { ...props } />;

  if (props?.to) {
    ButtonToRender = (
      <Link to={props.to}>
        <BootstrapButton { ...props } />
      </Link>
    )
  }
  
  return ButtonToRender;
};

export default Button;
