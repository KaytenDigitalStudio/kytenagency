import React from 'react';
import classes from '../../styles/Content.module.scss';
import About from './About';
import Homepage from './Homepage';
import Services from './Services';
import Portfolio from './Portfolio';
import WorkFlow from './WorkFlow';
import ScrollBar from '../ScrollBar/ScrollBar.jsx';

function Content() {

  

  return (
    <div className={classes.content} >
      <ScrollBar />

      <Homepage />
      <About />
      <Services />
      <WorkFlow />
      <Portfolio />
    </div>
  );
}

export default Content;
