import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './styles.module.css';
import { useTrail, animated, a } from '@react-spring/web'
import ReactPlayer from 'react-player'
import 화재감지1 from '../../img/화재감지1.gif'
import { Container, Row, Col } from 'react-bootstrap';
const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Homepage() {

  const [open, set] = useState(true);

  return (
    <div>
      <Parallax className={styles.container} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={1.3}
          style={{
            backgroundColor: 'black',
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${화재감지1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{
            backgroundColor: 'white'
          }}>
          <Container className={styles.container} onClick={() => set((state) => !state)}>
          <Row>
            <Col>
            <Trail open={open}>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
            </Trail>
            </Col>
            <Col>
            <Trail open={open}>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
            </Trail>
            </Col>
          </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          style={{
            backgroundColor: 'black'
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
