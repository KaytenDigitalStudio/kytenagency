import React from 'react';
import classes from '../../styles/Menu.module.scss';

const Menu = ({ items, active, setActive }) => {
  const checkClass = (e) => {
    setActive(false);
    if (e.target.classList.contains(classes.menuActive)) {
      console.log('contains');
    }
  };

  return (
    <div
      className={active ? classes.menuActive : classes.menu}
      onClick={checkClass}
    >
      <div className={classes.blur}></div>
      <div className={classes.menuContent}>
        <ul>
          {items.map((item) => (
            <li key={item.value}>
              <a href={items.href} onClick={(e) => e.stopPropagation()}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
