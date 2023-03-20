import React from 'react';
import styles from './styles.module.css';
import { useTrail, useInView, a } from '@react-spring/web';

export const Trail = ({ children }) => {
  const [ref, inView] = useInView();
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    height: inView ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div ref={ref} style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
