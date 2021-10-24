// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import DonorHero from '../../components/DonorHero/DonorHero';
import Header from '../../components/Header/Header';
import './DonorHome.scss'
import Wave from "../../assets/Wave.svg"
import { ReactComponent as Kindness } from "../../assets/Kindness.svg";
import { ReactComponent as HeartMessage } from "../../assets/HeartMessage.svg";

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
    <div className="kindness-container" style={{
      height: 747,
      background: `url(${Wave})`,
      width: "100vw",
    }}>
      <div className="kindness-description">
        <Kindness className="kindness-asset" />
        <div>
          <HeartMessage />
          <p className="heading-1 heading-darkpurple">A global community of kindness.</p>
        </div>
      </div>
    </div>
    <div className="opportunity-gallery">
      ,
    </div>
  </div>
);

export default DonorHome;