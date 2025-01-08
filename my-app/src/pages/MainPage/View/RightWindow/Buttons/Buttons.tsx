import { ArrowRight, ArrowLeft } from 'lucide-react';
import styles from './Buttons.module.scss';
import React, { Dispatch, FC, SetStateAction } from 'react';
interface ButtonsProps {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}
const Buttons: FC<ButtonsProps> = ({ setIndex, index }) => {
  return (
    <div className={styles.buttons}>
      <button
        onClick={() => setIndex(prev => prev - 1)}
        disabled={index + 1 === 1 ? true : undefined}
      >
        <ArrowLeft />
      </button>

      {<span className={styles.counter}>{`${index + 1} / 3`}</span>}

      <button
        onClick={() => setIndex(prev => prev + 1)}
        disabled={index + 1 === 3 ? true : undefined}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
export default Buttons;
