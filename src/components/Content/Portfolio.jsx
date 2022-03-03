import React from 'react';
import classes from '../../styles/Portfolio.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import nextprev from '../../images/icons/nextprev.svg';

function SampleNextArrow(props) {
const { className, style, onClick } = props;
return (
<img className={className} style={{ ...style, display: "block", transform: "scale(2)"} } src={nextprev} alt='' onClick={onClick} ></img>
);
}

function SamplePrevArrow(props) {
const { className, style, onClick } = props;
return (
<img className={className} style={{ ...style, display: "block", transform: "rotate(180deg) scale(2)"} } src={nextprev} alt='' onClick={onClick} ></img>
);
}
function Portfolio() {
const settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
cssEase: 'linear',
nextArrow:
<SampleNextArrow />,
prevArrow:
<SamplePrevArrow />,
}
return (
<section className={classes.portfolio} id='portfolio'>
  <p className={classes.topic}>Portfolio</p>

  <Slider {...settings} className={classes.slider}>
    <div className={classes.card}>1</div>
    <div className={classes.card}>2</div>
    <div className={classes.card}>3</div>
    <div className={classes.card}>4</div>
  </Slider>



</section>
);
}

export default Portfolio;