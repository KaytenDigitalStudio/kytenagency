import React from 'react';
import classes from '../../styles/Content.module.scss';
import About from './About';
import Homepage from './Homepage';
import Services from './Services';
import Portfolio from './Portfolio';
import Workflow from './Workflow';

function Content(t) {
  return (
    <div className={classes.content}>
      <Homepage t={t} />
      <About />
      <Services />
      <Workflow />
      <Portfolio />
    </div>
  );
}

export default Content;
