import React, { FC } from 'react';
import styles from './Inner.module.scss';

const Inner: FC = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.player}>
        <iframe
          width='800'
          height='450'
          src='https://www.youtube.com/embed/m2vijtILDuk?si=vigHeaU30XPONhNt'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.wrap}>
        <div className={styles.wra}>
          <div className={styles.subWra}>
            <div className={styles.title}>
              <h2>Intresting facts</h2>
            </div>
            <div className={styles.body}>
              <div className={styles.bodyItem}>
                <h1>1</h1>
                <span>
                  The movie’s science was conducted by a Nobel laureate
                </span>
              </div>
              <div className={styles.bodyItem}>
                <h1>2</h1>
                <span>All the science is real</span>
              </div>
              <div className={styles.bodyItem}>
                <h1>3</h1>
                <span>
                  Gargantua was made so that it would not rip Cooper apart
                </span>
              </div>
              <div className={styles.bodyItem}>
                <h1>4</h1>
                <span>
                  The interviews at the beginning and end of the movie are real
                </span>
              </div>
              <div className={styles.bodyItem}>
                <h1>5</h1>
                <span>Behind the wormhole and Gargantua was a lot of work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inner;
