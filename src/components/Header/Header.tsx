import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

interface IHeaderProps {
  mainContent?: React.ReactElement | null;
  navContent?: React.ReactElement | null;
}

const Header = ({
  mainContent = null,
  navContent = null,
}: IHeaderProps) => {
  return (
    <div className="top-bar">
      <div className="primary-bar" />
      <div className="light-bar">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="light-bar">
          { mainContent }
        </div>
      </div>
      <div className="dark-purple-bar">
        Global Issues | Poorest Countries | Top 10 Rated Projects | Disaster Areas | Local Map
      </div>
    </div>
  );
}

export default Header;
