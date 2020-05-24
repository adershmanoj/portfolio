import React from 'react';
import { NavLink } from 'react-router-dom';

// const routes = [
//   { to: '/', label: 'Home' },
//   { to: '/about', label: 'About' },
//   { to: '/work', label: 'Work' },
//   { to: '/skills', label: 'Skills' }
// ];

const Nav = ({routes}) => {
  const links = routes.map(({ path, name }) => {
    return <NavLink strict exact to={path} key={path}>{name}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav
