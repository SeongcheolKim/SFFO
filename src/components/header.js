import React, {Compnent} from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
)

const Header = () => {
  return (
    <div>
      <div className="logo">
        sandfox
      </div>
      <div className="menu">
        <MenuItem to ={'/'}>Intro</MenuItem>
        <MenuItem to ={'/projects'}>Projects</MenuItem>
        <MenuItem to ={'/board'}>Board</MenuItem>
        <MenuItem to ={'/contact'}>Contact</MenuItem>
      </div>
    </div>
  );
};

export default Header;
