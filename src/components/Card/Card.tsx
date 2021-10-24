import React from 'react';
import BootstrapCard, { CardProps } from 'react-bootstrap/Card';
import './Card.scss';

interface ICardProps extends CardProps {

}

const Card = (props: ICardProps) => (
  <Card { ...props } />
);

export default Card;
