import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router';
import './FindRequests.scss'

interface IFindRequestsProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=197%3A161
const FindRequests: FunctionComponent<IFindRequestsProps> = (props: IFindRequestsProps) => (
  <div className="FindRequests">
    FindRequests Component
  </div>
);

export default FindRequests;