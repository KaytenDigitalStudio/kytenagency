import React from 'react';
import classes from '../../../styles/Menu.module.scss';

const Menu = ({ active, setActive }) => {
  const items = [
    { value: 'Main', href: '/main' },
    { value: 'About', href: '/about' },
    { value: 'Services', href: '/services' },
    { value: 'Portfolio', href: '/portfolio' },
    { value: 'Contacts', href: '/contacts' },
  ];

  return (
    <div
      className={active ? classes.menuActive : classes.menu}
      onClick={() => setActive(false)}
    >
      <div className={classes.blur}></div>
      <div className={classes.menuContent} onClick={(e) => e.stopPropagation()}>
        <ul>
          {items.map((items) => (
            <li key={items.value}>
              <a href={items.href}>{items.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
