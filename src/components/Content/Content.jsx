import React from 'react';
import classes from '../../styles/Content.module.scss';
import Homepage from './Homepage/Homepage';

function Content() {
  return (
    <main className={classes.main}>
      <Homepage />
      <Homepage />
    </main>
  );
}

export default Content;
