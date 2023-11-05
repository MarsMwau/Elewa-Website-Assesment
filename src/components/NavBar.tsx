import React from 'react';
import "../styles/NavBar.css";

interface MenuItem {
  path: string;
  name: string;
}

const NavBar: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      path: '/home',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About Us'
    },
    {
      path: '/social-impact',
      name: 'Social Impact'
    },
    {
      path: '/invest',
      name: 'Invest'
    },
    {
      path: '/venture',
      name: 'Venture Labs'
    },
    {
      path: '/brands',
      name: 'Brands'
    },
    {
      path: '/careers',
      name: 'Careers'
    },
    {
      path: '/contact',
      name: 'Contact'
    }
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1>elewa group</h1>
      </div>
      <div className="nav-pages">
        {menuItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <a href={item.path}>{item.name}</a>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default NavBar;
