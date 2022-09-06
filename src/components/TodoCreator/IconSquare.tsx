import styles from '../../styles/todoCreatorStyles.module.scss';

type IconSquareProps = {
  icon: any;
};

function IconSquare(props: IconSquareProps) {
  const { icon } = props;

  return <div className={styles.iconSquare}>{icon}</div>;
}

export default IconSquare;
