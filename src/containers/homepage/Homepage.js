import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './styles.module.css';
import { useTrail, animated } from '@react-spring/web'
import ReactPlayer from 'react-player'

function Page({ offset, gradient, onClick }) {
  const trails = useTrail(3, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={0} speed={0.3}>
        <span>      
          1
        </span>
      </ParallaxLayer>
      <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={1} speed={0.5}>
        <span>2</span>
      </ParallaxLayer>
      <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={2} speed={0.5}>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </ParallaxLayer>
      <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={3} speed={0.5}>
        <ReactPlayer url='https://www.youtube.com/watch?v=Ofo64-esJ1k' />
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
      <Parallax className={styles.container} ref={parallax} pages={4}>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(3)} />
        <Page offset={3} gradient="pink" onClick={() => scroll(0)} />
      </Parallax>

    </div>
  );
}
