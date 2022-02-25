import React, { useState } from 'react';
import classes from '../../styles/Homepage.module.scss';
import ilustration from '../../images/ilustrations/first.svg';
import arrow from '../../images/icons/arrow.svg';

function Homepage() {
  return (
    <div className={classes.homepage} id='homepage'>
      <div className={classes.body}>
        <div className={classes.ilustration}>
          <img src={ilustration} alt='' draggable='false' />
        </div>
        <div className={classes.textBlock}>
          <p className={classes.topic}>BEST DESICION FOR YOUR BUSINESS</p>
          <p className={classes.title}>INCREASE YOUR PROFITS ONLINE</p>
          <p className={classes.description}>
            In search for cute little puppy, Captain Sem has - come back from
            his tragic death. With his hogwarts certified power he promise to be
            a hero for all of ghostkind.
          </p>
          <button className={classes.button}>
            <p>Send Inquiry</p>
          </button>
        </div>
      </div>
      <div className={classes.scrollShown}>
        <div className={classes.arrow}>
          <img src={arrow} alt='' draggable='false' />
        </div>
        <div className={classes.scrollText}>Scroll down</div>
      </div>
    </div>
  );
}

export default Homepage;
