import React from 'react';
import classes from '../../styles/Footer.module.scss';

function Footer() {
  return (
    <div className={classes.footer} id='footer'>
      <div className={classes.body}>
        
       <div className={classes.contactForm}>
           <div className={classes.mail}>

             <h1>Got A Question?</h1>
             <p>We love questions and feedback - and we’re always happy to help!</p>
             <div className={classes.inputs}>
              <div className={classes.inpContainer}><input type="text" /> </div>
              <div className={classes.inpContainer}><input type="text" /> </div>
              <div className={classes.inpContainer}><input type="text" /> </div>
              <div className={classes.inpContainer}><input type="text" /> </div>
              <div className={classes.inpContainer}><input type="text" /> </div>
              
             </div>
             <button>submit</button>
             
           </div>
           <div className={classes.info}>

             <h1>information</h1>
             <hr className={classes.line1}/>
              <div className={classes.location}></div>
              <div className={classes.mailAddress}></div>

             <hr className={classes.line2}/>

             <div className={classes.socialIcons}></div>
           </div>
       </div>
       <div className={classes.allRights}>2021-2022. Kyten Digital Studio All rights reserved.</div>
        

      </div>
    </div>
  );
}

export default Footer;
