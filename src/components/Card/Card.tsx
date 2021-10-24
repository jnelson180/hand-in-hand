import React from 'react';
import BootstrapCard, { CardProps } from 'react-bootstrap/Card';
import './Card.scss';

interface ICardProps {

}

const Card = (props: ICardProps) => (
  <Card { ...props } />
);

export default Card;
