// eslint-disable-next-line
import React, { FunctionComponent } from 'react'
// eslint-disable-next-line
import { RouteComponentProps } from 'react-router';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import './Login.scss'
import { ReactComponent as Languages } from "../../assets/Languages.svg";

interface ILoginProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6080
const Login: FunctionComponent<ILoginProps> = (props: ILoginProps) => {
  const history = useHistory();

  const handleLogin = (_evt) => {
    // TODO: do validation prior to pushing to landing page
    history.push("/donor-home");
  }

  return (
    <main className="Login">
      <Header mainContent={(
        <>
          <strong className="strongtext margin-right">Donate to World Vision</strong>
          <Button className="margin-right partner-button main-box-button" type="button">Partner</Button>
          <Button to="/login" className="margin-right login-button main-box-button" type="button">Log in</Button>
          <Languages />
        </>
      )} />
      <div className="loginform">
        <h5>
          Login<br />
          Don't have an account? Sign up.<br />
        </h5>
        <form onSubmit={handleLogin}>
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
};

export default Login;