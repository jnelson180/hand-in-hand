import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header/Header';
import LandingBackground from "../../assets/LandingBackground.jpg";
import './Landing.scss'
import Card from '../../components/Card/Card';

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
    <Header />
    <section className="landing-background" style={{
      background: `url(${LandingBackground})`,
      height: 1039,
    }}>
      <h1 className="landing-cta heading-light main-box">
        <div className="cta">
          Hand-in-Hand<sup className="supertext">TM</sup><br />
          Partner with us to solve<br />
          problems around the world.
        </div>
        <button className="login-button main-box-button" type="button">LOGIN</button>
        <button className="signup-button main-box-button" type="button">SIGN UP</button>
      </h1>
    </section>
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