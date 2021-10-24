// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import DonorHero from '../../components/DonorHero/DonorHero';
import Header from '../../components/Header/Header';
import Button from "../../components/Button/Button";
import './DonorHome.scss'
import Wave from "../../assets/Wave.svg"
import { ReactComponent as Kindness } from "../../assets/Kindness.svg";
import { ReactComponent as HeartMessage } from "../../assets/HeartMessage.svg";
import { useGetOpportunities } from '../../hooks/useGetOpportunities';

interface IDonorHomeProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6561
const DonorHome: FunctionComponent<IDonorHomeProps> = (props: IDonorHomeProps) => {
  const opportunities = useGetOpportunities();
  
  return (
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
          <div id="community-message">
            <HeartMessage />
            <p className="heading-1 heading-lightpurple">A global community of kindness.</p>
          </div>
        </div>
      </div>
      <div className="opportunity-gallery">
        <h1 className="heading-1 heading-lightpurple">Donation opportunities: Suggested for you</h1>
        <div className="opportunity-cards">
          {opportunities.map((opportunity) => (
            <Button to={`/checkout/${ opportunity.id }`} key={opportunity.id} className="btn btn-link opportunity-link">
              <div className="opportunity-card">
                <img src={opportunity.image} className="opportunity-image" alt={ opportunity.alt } />
                <span>
                  <span className="opportunity-location">{opportunity.location} •&nbsp;</span>
                  <span className="opportunity-topic">{opportunity.topic}</span><br />
                </span>
                <span className="opportunity-title">{opportunity.title}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DonorHome;