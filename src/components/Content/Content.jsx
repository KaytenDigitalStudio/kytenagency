import React from 'react';
import classes from '../../styles/Content.module.scss';
import About from './About';
import Homepage from './Homepage';
import Services from './Services';
import Portfolio from './Portfolio';
import WorkProcess from './WorkProcess';

function Content() {
  return (
    <div className={classes.content}>
      <Homepage />
      <About />
      <Services />
      <WorkProcess />
      <Portfolio />
    </div>
  );
}

export default Content;
