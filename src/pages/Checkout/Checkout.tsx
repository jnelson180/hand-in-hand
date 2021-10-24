// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import './Checkout.scss'

interface ICheckoutProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1247%3A2045
const Checkout: FunctionComponent<ICheckoutProps> = (props: ICheckoutProps) => (
  <div className="Checkout">
    Checkout Component
  </div>
);

export default Checkout;