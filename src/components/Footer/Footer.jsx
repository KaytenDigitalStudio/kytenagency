import React from 'react';
import classes from '../../styles/Footer.module.scss';
import locationIcon from '../../images/icons/footer-location.svg';
import mailIcon from '../../images/icons/footer-mail.svg';
import rights from '../../images/icons/rights.svg';
import Form from './Form/Form';
// import facebook from '../../images/icons/footer-facebook.svg';
// import insta from '../../images/icons/footer-insta.svg';

function Footer() {
  return (
    <div className={classes.footer} id='footer'>
      <div className={classes.body}>
        <div className={classes.contactForm}>
          <Form />
          <div className={classes.info}>
            <h1>information</h1>
            {/* <hr className={classes.line1}/> */}

            <div className={classes.infoContainer}>
              <div className={classes.location}>
                <img
                  className={classes.icon}
                  src={locationIcon}
                  alt=''
                  draggable='false'
                />
                <p className={classes.infoText}>Prague, czech republic</p>
              </div>
              <div className={classes.mailAddress}>
                <img
                  className={classes.icon}
                  src={mailIcon}
                  alt=''
                  draggable='false'
                />
                <p className={classes.infoText}>info@kyten.studio</p>
              </div>
            </div>

            {/* <hr className={classes.line2}/> */}

            <div className={classes.socialIcons}>
              <a href='/' className={classes.facebook}>
                <svg fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_44_72)'>
                    <path
                      d='M26.2499 30H18.7501V18.75H22.3874L23.3437 14.9999H18.7501V10.4999C18.7501 9.25733 19.7573 8.24988 21.0001 8.24988H23.2501V4.49999H21.0001C17.6885 4.5052 15.0051 7.18833 14.9999 10.4999V14.9999H11.25V18.75H14.9999V30H3.74996C1.67904 30 6.10352e-05 28.321 6.10352e-05 26.2498V3.7499C6.10352e-05 1.67898 1.67904 0 3.74996 0H26.2499C28.3211 0 30.0001 1.67898 30.0001 3.7499V26.2498C30.0001 28.321 28.3211 30 26.2499 30ZM20.25 28.4998H26.2499C27.4927 28.4998 28.4999 27.4927 28.4999 26.2498V3.7499C28.4999 2.50735 27.4927 1.4999 26.2499 1.4999H3.74996C2.50741 1.4999 1.49996 2.50735 1.49996 3.7499V26.2498C1.49996 27.4927 2.50741 28.4998 3.74996 28.4998H13.5V20.2499H9.75012V13.5H13.5V10.4999C13.5052 6.35997 16.8599 3.00503 21.0001 3.00008H24.75V9.75006H21.0001C20.5859 9.75006 20.25 10.0857 20.25 10.4999V13.5H25.2749L23.55 20.2499H20.25V28.4998Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_44_72'>
                      <rect width='30' height='30' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href='/' className={classes.instagram}>
                <svg fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_44_18)'>
                    <path
                      d='M8.8637 0C3.97675 0 6.10352e-05 3.97669 6.10352e-05 8.86364V21.1364C6.10352e-05 26.0233 3.97675 30 8.8637 30H21.1364C26.0234 30 30.0001 26.0233 30.0001 21.1364V8.86364C30.0001 3.97669 26.0234 0 21.1364 0H8.8637ZM8.8637 1.36364H21.1364C25.2863 1.36364 28.6364 4.71376 28.6364 8.86364V21.1364C28.6364 25.2862 25.2863 28.6364 21.1364 28.6364H8.8637C4.71382 28.6364 1.3637 25.2862 1.3637 21.1364V8.86364C1.3637 4.71376 4.71382 1.36364 8.8637 1.36364ZM23.1819 5.45455C22.8202 5.45455 22.4734 5.59821 22.2176 5.85395C21.9619 6.10968 21.8182 6.45652 21.8182 6.81818C21.8182 7.17984 21.9619 7.52669 22.2176 7.78242C22.4734 8.03815 22.8202 8.18182 23.1819 8.18182C23.5435 8.18182 23.8904 8.03815 24.1461 7.78242C24.4018 7.52669 24.5455 7.17984 24.5455 6.81818C24.5455 6.45652 24.4018 6.10968 24.1461 5.85395C23.8904 5.59821 23.5435 5.45455 23.1819 5.45455ZM15.0001 7.5C10.866 7.5 7.50006 10.8659 7.50006 15C7.50006 19.1341 10.866 22.5 15.0001 22.5C19.1341 22.5 22.5001 19.1341 22.5001 15C22.5001 10.8659 19.1341 7.5 15.0001 7.5ZM15.0001 8.86364C18.3972 8.86364 21.1364 11.6029 21.1364 15C21.1364 18.3971 18.3972 21.1364 15.0001 21.1364C11.603 21.1364 8.8637 18.3971 8.8637 15C8.8637 11.6029 11.603 8.86364 15.0001 8.86364Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_44_18'>
                      <rect width='30' height='30' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.allRights}>
          <img src={rights} className={classes.rights} alt=''></img>
          2021-2022. Kyten Digital Studio All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
