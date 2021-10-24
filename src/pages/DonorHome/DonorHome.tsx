import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router';
import './DonorHome.scss'

interface IDonorHomeProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6561
const DonorHome: FunctionComponent<IDonorHomeProps> = (props: IDonorHomeProps) => (
  <div className="DonorHome">
    DonorHome Component
  </div>
);

export default DonorHome;