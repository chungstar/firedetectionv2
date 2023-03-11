import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './styles.module.css';
import { useTrail, animated } from '@react-spring/web'
import ReactPlayer from 'react-player'
import 땃쥐 from '../../img/1663106549.gif'
function Page({ offset, onClick }) {
  return (
    <>
      <ParallaxLayer sticky={{ start : 0.9, end : 3.5 }}>
        <img src={땃쥐}/>
      </ParallaxLayer>
      <ParallaxLayer offset={0}>
        <span>      
          1
        </span>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <span>2</span>
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <div className={styles.container}>
          <ReactPlayer className={styles.video} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <div className={styles.container}>
          <ReactPlayer className={styles.video} url='https://www.youtube.com/watch?v=Ofo64-esJ1k' />
        </div>
      </ParallaxLayer>
    </>
  );
}
export default function Homepage() {
  const parallax = useRef(null);

  function scroll(to) {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  }

  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax ref={parallax} pages={4}>
        <Page offset={0} onClick={() => scroll(1)} />
        <Page offset={1} onClick={() => scroll(2)} />
        <Page offset={2} onClick={() => scroll(3)} />
        <Page offset={3} onClick={() => scroll(0)} />
      </Parallax>

    </div>
  );
}
