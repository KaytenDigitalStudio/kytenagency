import React from 'react';
import classes from '../../styles/WorkFlow.module.scss';
import arrow from '../../images/icons/workflow-arrow.svg';
import firstStep from '../../images/icons/workflow-first-step.svg';
import secondStep from '../../images/icons/workflow-second-step.svg';
import thirdStep from '../../images/icons/workflow-third-step.svg';

function WorkFlow() {
return (
<div className={classes.workFlow} id='workFlow'>
  <p className={classes.topic}>Work Flow</p>
  <div className={classes.cardContainer}>
    <div className={classes.card}>
      <img src={firstStep} alt="" />
      <h1>tell us your needs</h1>
      <p>After listening to your wishes, we will do everything possible to fulfill your goals.</p>
    </div>
    <img src={arrow} alt="" />
    <div className={classes.card}>
      <img src={secondStep} alt="" />
      <h1>developing the best solution</h1>
      <p>Leave all those obscure technical terms to us. We'll take it from a technical perspective.</p>
    </div>
    <img src={arrow} alt="" />
    <div className={classes.card}>
      <img src={thirdStep} alt="" />
      <h1>deliver quality pruduct</h1>
      <p>The final straight line, after your quality control and approval, your product will soon be seen by the world.
      </p>
    </div>
  </div>
</div>
);
}

export default WorkFlow;