import React, {
  useEffect
} from 'react';
import classes from '../../styles/ScrollBar.module.scss';

function ScrollBar() {
  // const sections = useRef();
  const sections = document.querySelectorAll('section');
  const navigation = document.getElementById('navigation');
  const windowHeight = window.innerHeight;



  function resetSelection() {
    for (var i = 0; i < navigation.children.length; i++) {
      navigation.children[i].style.background = "none"
    }
  }
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    sections.forEach((section, i) => {
      if (section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
        resetSelection()
        navigation.children[i].style.background = "#fff"
      }
    })
  }
  // navigation.querySelectorAll('li').forEach(function(item, i) {
  //   item.addEventListener('click', function() {
  //     resetSelection();
  //     window.scrollTo({
  //       top: i * windowHeight,
  //       behavior: 'smooth'
  //     });
  //   });
  // });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );


  return ( 
    < ul className={ classes.navigation } id='navigation'>
      <li li className={ classes.selected }></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
                )
                }
export default ScrollBar