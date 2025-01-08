import React, { FC } from 'react';
import styles from './ModalWindow.module.scss';

interface ModalWindowProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
const ModalWindow: FC<ModalWindowProps> = ({
  visible,
  setVisible,
  children
}) => {
  const rootClases = [styles.Mw];
  if (visible) {
    rootClases.push(styles.active);
  }
  return (
    <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
      <div onClick={e => e.stopPropagation()} className={styles.Mc}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
