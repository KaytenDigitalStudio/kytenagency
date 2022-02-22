import React from 'react';
import classes from '../../styles/Menu.module.scss';
import logo from '../../images/logo/logo.svg';

const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? classes.menuActive : classes.menu}
      onClick={() => setActive(false)}
    >
      <div className={classes.blur}></div>
      <div className={classes.menuContent}>
        <a
          href='#'
          className={classes.logoGroup}
          onClick={(e) => e.stopPropagation()}
        >
          <img className={classes.logo} src={logo} alt='Kayten Digital Logo' />
          <div className={classes.logoText}>Kayten Digital</div>
        </a>
        <ul>
          {items.map((item) => (
            <li>
              <a href={items.href} onClick={(e) => e.stopPropagation()}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        <div className={classes.burgerMenu}></div>
      </div>
    </div>
  );
};

export default Menu;
