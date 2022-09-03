import { Colours } from '../../types';
import ColourSquare from './ColourSquare';
import styles from '../../styles/todoCreatorStyles.module.scss';

function ColourChooser() {
  return (
    <div className={styles.colourSquareWrapper}>
      {Colours.map((el) => (
        <ColourSquare colour={el} />
      ))}
    </div>
  );
}

export default ColourChooser;
