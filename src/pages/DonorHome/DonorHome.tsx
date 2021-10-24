// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import DonorHero from '../../components/DonorHero/DonorHero';
import Header from '../../components/Header/Header';
import './DonorHome.scss'

interface IDonorHomeProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6561
const DonorHome: FunctionComponent<IDonorHomeProps> = (props: IDonorHomeProps) => (
  <div className="DonorHome">
    <Header mainContent={(
      <> 
        <strong>My plan:&nbsp;</strong> Donor [Donor icon with alert count]
      </>
    )} />
    <DonorHero />
  </div>
);

export default DonorHome;