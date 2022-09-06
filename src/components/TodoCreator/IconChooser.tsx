import styles from '../../styles/todoCreatorStyles.module.scss';
import IconSquare from './IconSquare';
import { Icons } from '../../utils';

function IconChooser() {
  return (
    <div className={styles.iconSquareWrapper}>
      {Icons.map((el, idx) => (
        <IconSquare key={idx} icon={el} />
      ))}
    </div>
  );
}

export default IconChooser;
