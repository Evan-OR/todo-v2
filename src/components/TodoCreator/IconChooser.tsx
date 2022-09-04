import styles from '../../styles/todoCreatorStyles.module.scss';
import IconSquare from './IconSquare';

function IconChooser() {
  return (
    <div className={styles.iconSquareWrapper}>
      <IconSquare />
      <IconSquare />
      <IconSquare />
      <IconSquare />
    </div>
  );
}

export default IconChooser;
