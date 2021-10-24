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
import Opportunity1 from "../../assets/Opportunity1.png";
import Opportunity2 from "../../assets/Opportunity2.png";
import Opportunity3 from "../../assets/Opportunity3.png";
import Opportunity4 from "../../assets/Opportunity4.png";
import Opportunity5 from "../../assets/Opportunity5.png";

interface IOpportunity {
  id: string;
  image: string;
  location: string;
  topic: string;
  title: string;
  alt: string;
}

const opportunities = [
  {
    id: "1",
    image: Opportunity1,
    location: "India",
    topic: "Social Justice",
    title: "Stop Violence Against Women In India",
    alt: "A group of Indian women smiling",
  },
  {
    id: "2",
    image: Opportunity2,
    location: "India",
    topic: "Economic Growth",
    title: "Help Rural Women Gain Essential Business Skills",
    alt: "A photo taken inside of a clothing shop",
  },
  {
    id: "3",
    image: Opportunity3,
    location: "India",
    topic: "Digital Literacy",
    title: "Encourage Indian Women To Develop A Career In Tech",
    alt: "A group of women seated at computers",
  },
  {
    id: "4",
    image: Opportunity4,
    location: "India",
    topic: "Art",
    title: "Provide Instruments For Under-Served Children In India",
    alt: "A group of children playing instruments",
  },
  {
    id: "5",
    image: Opportunity5,
    location: "India",
    topic: "Local Disaster",
    title: "Refugee Crisis Fund",
    alt: "A man helping clean at a disaster site",
  },
];

interface IDonorHomeProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6561
const DonorHome: FunctionComponent<IDonorHomeProps> = (props: IDonorHomeProps) => {
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