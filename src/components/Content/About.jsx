import React from 'react';
import classes from '../../styles/About.module.scss';
import about from '../../images/ilustrations/about.png';

function AboutUs() {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.body}>
        <div className={classes.ilustration}>
          <img src={about} alt='' draggable='false' />
        </div>
        <div className={classes.textBlock}>
          <p className={classes.topic}>About</p>
          <p className={classes.title}>
            WE DEVELOP WEBSITES OF ANY COMPLEXITY FOR ANY BUSINESS
          </p>
          <p className={classes.description}>
            Our professional team is ready to fulfill your every request to
            solve your problem. Using only advanced, modern technologies
            available on the market we will implement your wishes in the best
            way. Your wishes are our concern.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
