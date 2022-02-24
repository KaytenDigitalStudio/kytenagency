import React from 'react';
import classes from '../../styles/Services.module.scss';
import thirdImage from '../../images/ilustrations/third.svg';

function Services() {
  return (
    <div className={classes.services} id='services'>
      <div className={classes.body}>
        <div className={classes.ilustration}>
          <img src={thirdImage} alt='' />
        </div>
        <div className={classes.textBlock}>
          <p className={classes.topic}>Services</p>
          <p className={classes.title}>INCREASE YOUR PROFITS ONLINE</p>
          <p className={classes.description}>
            In search for cute little puppy, Captain Sem has - come back from
            his tragic death. With his hogwarts certified power he promise to be
            a hero for all of ghostkind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
