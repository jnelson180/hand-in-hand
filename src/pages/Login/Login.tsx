// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header/Header';
import './Login.scss'
import { ReactComponent as Languages } from "../../assets/Languages.svg";

interface ILoginProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6080
const Login: FunctionComponent<ILoginProps> = (props: ILoginProps) => (
  <main className="Login">
    <Header mainContent={(
      <>
        <strong className="strongtext margin-right">Donate to World Vision</strong>
        <button className="margin-right" type="button">Partner</button>
        <button className="margin-right" type="button">Log in</button>
        <Languages />
      </>
    )} />
    <div className="loginform">
      <h5>
        Login<br />
        Don't have an account? Sign up.<br />
      </h5>
      <form>
        <input type="email" id="email" name="email" placeholder=" example@email.com" /><br /><br />
        <input type="password" id="password" name="password" placeholder=" **********" /><br /><br />
        <input type="submit" className="login" value="LOGIN" /><br />
      </form>
      <h5>
        Forgot your password? Get it back.<br /><br />
      </h5>
    </div>
  </main>
);

export default Login;