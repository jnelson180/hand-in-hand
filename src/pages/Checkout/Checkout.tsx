// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import { useHistory } from "react-router-dom";
import './Checkout.scss'
import Header from '../../components/Header/Header';
import Button from "../../components/Button/Button";
import { useGetOpportunity } from '../../hooks/useGetOpportunities';

interface ICheckoutProps extends RouteComponentProps {}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1247%3A2045
const Checkout: FunctionComponent<ICheckoutProps> = (props: ICheckoutProps) => {
  const history = useHistory();
  const opportunity = useGetOpportunity((props?.match?.params as any)?.id);
  const goBack = (_evt) => {
    history.goBack();
  }

  return (
    <div className="Checkout">
      <Header mainContent={(
        <>
          <strong>My plan:&nbsp;</strong> Donor [Donor icon with alert count]
        </>
      )}
      navContentBefore={(
        // todo: change this out for a Button
        <div 
          onClick={goBack} 
          tabIndex={0} 
          onKeyDown={goBack} 
          role="button" 
          className="btn btn-link back-button"
        >
          {`< Back`}
        </div>
      )} />
      <div className="checkout-content">
        <pre>{ JSON.stringify(opportunity, undefined, 2) }</pre>
      </div>
    </div>
  );
};

export default Checkout;