import React from 'react';
import BootstrapBadge, { BadgeProps } from 'react-bootstrap/Badge';
import './Button.scss';

interface IBadgeProps extends BadgeProps {

}

const Button = (props: IBadgeProps) => (
  <BootstrapBadge { ...props } />
);

export default Button;
