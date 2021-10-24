// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header/Header';
import './Landing.scss'
import DonorHero from '../../components/DonorHero/DonorHero';
import { ReactComponent as Languages } from "../../assets/Languages.svg";

interface ILandingProps extends RouteComponentProps {
  // TODO
}

interface ITile {
  icon: string;
  title: string;
  description: string;
};

const tiles: ITile[] = [
  {
    icon: "[*]", // todo
    title: "Social Agents",
    description: "Nonprofits, Christian Ministries and School Directories apply and join WorldVision as social agents to make valuable connections, to find skilled, problem-solving volunteers and to reach funds for their projects.",
  },
  {
    icon: "[*]", // todo
    title: "Community Donors",
    description: "You can find causes, ministries, and challenges you personally identify with and help reach their goals with your talents and resources. You feel great by safely getting involved in specific needs, knowing how your money is put to work.",
  },
  {
    icon: "[*]", // todo
    title: "Corporate Donors",
    description: "Generous companies and their employees further support high-impact projects with donations and grants, helping local communities thrive.",
  },
  {
    icon: "[*]", // todo
    title: "Our Impact",
    description: "We envision global communities and individuals coming together, at their capacity, for a better world. We believe in systematic change across global, national, and local levels; and we will partner so that together we can achieve more than we could on our own.",
  },
];

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6080
const Landing: FunctionComponent<ILandingProps> = (props: ILandingProps) => (
  <main className="Landing">
    <Header mainContent={(
      <>
        <strong className="strongtext margin-right">Donate to World Vision</strong>
        <button className="margin-right" type="button">Partner</button>
        <button className="margin-right" type="button">Log in</button>
        <Languages />
      </>
    )} />
    <DonorHero />
    <section>
      <h1 className="heading-primary">What do we believe in?<br />
        <span className="heading-darkpurple">
          Everyone can be a philanthropist.<br />
          And this is how we make it work.
        </span>
      </h1>
      {/* TODO: factor this out into the Card component? And factor out styles into scss */}
      <div style={{
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between"
      }}>
        { tiles.map((tile: ITile) => (
          <div key={ tile.title } style={{

          }}> 
            { tile.icon }<br />
            <strong>{ tile.title }</strong><br />
            <span>{ tile.description }</span><br />
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Landing;