import React from 'react';
import classes from '../../styles/Footer.module.scss';

function Footer() {
  return (
    <div className={classes.footer} id='footer'>
      <div className={classes.body}>
        
       <div className={classes.contactForm}>
           <div className={classes.mail}></div>
           <div className={classes.info}></div>
       </div>
       <div className={classes.allRights}>2021-2022. Kyten Digital Studio All rights reserved.</div>


      </div>
    </div>
  );
}

export default Footer;
