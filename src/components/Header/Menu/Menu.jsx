import React from 'react';
import { Link } from 'react-scroll';
import classes from '../../../styles/Menu.module.scss';

const Menu = ({ active, setActive }) => {
  const items = [
    { value: 'Main', href: 'homepage' },
    { value: 'About', href: 'about' },
    { value: 'Services', href: 'services' },
    { value: 'Work Flow', href: 'workflow' },
    { value: 'Portfolio', href: 'portfolio' },
    { value: 'Contacts', href: 'contacts' },
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
              <Link
                to={items.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setActive(false)}
              >
                {items.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
