import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import './Link.scss';

interface INavLinkProps extends NavLinkProps {};

const Link = (props: INavLinkProps) => (
  <NavLink { ...props } />
);

export default Link;
