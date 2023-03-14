import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './styles.module.css';
import { useTrail, animated } from '@react-spring/web'
import ReactPlayer from 'react-player'
import 화재감지1 from '../../img/화재감지1.gif'

export default function Homepage() {

  const trails = useTrail(1, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <div>
      <Parallax className={styles.container} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={1.3}
          style={{
            backgroundColor:'black',
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${화재감지1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{
            backgroundColor:'#6C7A89'
          }}>
          <div>
            react,react-spring,react-router,react-bootstrap,

            firebase

            python
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          style={{
            backgroundColor:'black'
          }}>
          <div>
            <ReactPlayer className={styles.video} url='https://www.youtube.com/watch?v=Ofo64-esJ1k' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          speed={0.5}
          factor={1}>
          <div>
            <div className='fs-1 fw-semibold text-light'>딥러닝을 통한 화재감지</div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
