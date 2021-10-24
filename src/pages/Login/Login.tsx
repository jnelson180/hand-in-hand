import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router';
import './Login.scss'

interface ILoginProps extends RouteComponentProps {
  // TODO
}

// https://www.figma.com/file/dfnnwc8tbQ9lDAxEpBBepb/WV-Prototype?node-id=1498%3A6353
const Login: FunctionComponent<ILoginProps> = (props: ILoginProps) => (
  <div className="Login">
    Login Component
  </div>
);

export default Login;