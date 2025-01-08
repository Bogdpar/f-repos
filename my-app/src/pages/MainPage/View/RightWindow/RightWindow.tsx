import styles from './RightWindow.module.scss';
import Buttons from './Buttons/Buttons';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
interface ViewAx {
  data: string;
  body: string;
  img: string;
  id: string;
}
const RightWindow: FC = () => {
  const [view, setView] = useState<ViewAx[]>([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<ViewAx[]>('http://localhost:3001/view')
      .then(response => {
        setView(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return null;
  }
  return (
    <div className={styles.orange}>
      <div className={styles.rightWindow}>
        <div className={styles.rightImg}>
          <img src={view[index].img} alt='resev' />
          <span
            className={styles.rightFire}
            dangerouslySetInnerHTML={{
              __html: '&#128293 Hot news'
            }}
          ></span>
          <div className={styles.rightBody}>
            <h3>{view[index].body}</h3>
          </div>
        </div>
        <div className={styles.rightData}>
          <span>{view[index].data}</span>
          <Buttons setIndex={setIndex} index={index} />
        </div>
      </div>
    </div>
  );
};
export default RightWindow;
