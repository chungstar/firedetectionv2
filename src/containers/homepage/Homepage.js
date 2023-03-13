import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './styles.module.css';
import { useTrail, animated } from '@react-spring/web'
import ReactPlayer from 'react-player'
import 땃쥐 from '../../img/1663106549.gif'

export default function Homepage() {

  const trails = useTrail(2, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <div>
      <Parallax className={styles.container} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{backgroundImage: `url('${땃쥐}')`, backgroundSize: 'cover',}}>
          <div className={`${styles.gradient}`}>      
            <h1 className='mt-5 text-light'>딥러닝을 통한 화재감지</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
        <div>
          {trails.map(props => (
          <animated.div style={props}>Hello World</animated.div>
        ))}
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div>
            <ReactPlayer className={styles.video} url='https://www.youtube.com/watch?v=Ofo64-esJ1k' />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
