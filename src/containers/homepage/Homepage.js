import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './styles.module.css';
import { useTrail, animated, a } from '@react-spring/web'
import ReactPlayer from 'react-player'
import 화재감지1 from '../../img/화재감지1.gif'
import { Container, Row, Col, Image } from 'react-bootstrap';

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
          speed={0.2}
          factor={1.3}
          style={{
            backgroundColor: 'black',
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)), url(${화재감지1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          style={{
            backgroundColor: '#212121'
          }}>
          <Container onClick={() => set((state) => !state)}>
            <Row>
              <Col>
                <div className='fs-1 fw-semibold text-light md-1'>기술 스택</div>
              </Col>
              </Row>
            <Row>
              <Col>
                <div className='fs-2 fw-semibold text-light'>프론트앤드</div>
                <Trail open={open}>
                  <Image height="60" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                  <Image height="60" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
                  <Image height="60" src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=black" />
                </Trail>
              </Col>
              <Col>
                <div className='fs-2 fw-semibold text-light'>백앤드</div>
                <Trail open={open}>
                  <Image height="60" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black" />
                </Trail>
              </Col>
              <Col>
                <div className='fs-2 fw-semibold text-light'>딥러닝</div>
                <Trail open={open}>
                  <Image height="60" src="https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=YOLO&logoColor=black" />
                  <Image height="60" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=black" />
                </Trail>
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          style={{
            backgroundColor: '#212121'
          }}>
          <div>
            <div className='fs-1 fw-semibold text-light'>프로젝트 영상</div>
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
