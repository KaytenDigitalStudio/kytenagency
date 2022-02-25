import React from 'react';
import classes from '../../styles/Content.module.scss';
import About from './About';
import Homepage from './Homepage';
import Services from './Services';

function Content() {
  return (
    <div className={classes.content}>
      <Homepage />
      <About />
      <Services />
    </div>
  );
}

export default Content;
