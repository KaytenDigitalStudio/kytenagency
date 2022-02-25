import React from 'react';
import classes from '../../styles/Services.module.scss';
import design from '../../images/icons/design.svg';
import code from '../../images/icons/code.svg';
import marketing from '../../images/icons/marketing.svg';
import third from '../../images/ilustrations/third.svg';
import fourth from '../../images/ilustrations/fourth.svg';

function Services() {
  return (
    <div className={classes.services} id='services'>
      <p className={classes.topic}>Services</p>
      <div className={classes.row}>
        <div className={classes.design}>
          <p className={classes.title}>WEBSITE DESIGNING</p>
          <div className={classes.icon}>
            <img src={design} alt='' draggable='false' />
          </div>
          <p className={classes.description}>
            Creation unique and clean userfriendly design for your needs.
          </p>
        </div>
        <div className={classes.code}>
          <p className={classes.title}>WEBSITE CREATION</p>
          <div className={classes.icon}>
            <img src={code} alt='' draggable='false' />
          </div>
          <p className={classes.description}>
            We will take care of the technological side of your needs.
          </p>
        </div>
        <div className={classes.marketing}>
          <p className={classes.title}>TARGETED PROMOTION</p>
          <div className={classes.icon}>
            <img src={marketing} alt='' draggable='false' />
          </div>
          <p className={classes.description}>
            We will help your site to be promoted in Google Ads., Facebook,
            Instagram.
          </p>
        </div>
      </div>
      {/* <img className={classes.elemOne} src={third} alt='' draggable='false' /> */}
      {/* <img className={classes.elemTwo} src={fourth} alt='' draggable='false' /> */}
    </div>
  );
}

export default Services;
