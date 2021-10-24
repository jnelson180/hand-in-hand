import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header/Header';
import './Login.scss'
import DonorHero from '../../components/DonorHero/DonorHero';
import Button from '../../components/Button/Button';
import { ReactComponent as Languages } from "../../assets/Languages.svg";

interface ILoginProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6080
const Login: FunctionComponent<ILoginProps> = (props: ILoginProps) => (
  <main className="Landing">
    <Header mainContent={(
      <>
        <strong className="strongtext margin-right">Donate to World Vision</strong>
        <Button className="margin-right partner-button main-box-button btn-outline" type="button">Partner</Button>
        <Button className="margin-right login-button main-box-button" type="button">Log in</Button>
        <Languages />
      </>
    )} />
    <DonorHero />
  </main>
);

export default Login;