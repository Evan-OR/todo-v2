import styles from '../../styles/todoCreatorStyles.module.scss';

type IconSquareProps = {
  icon: any;
  iconId: number;
  selectedId: number;
  handleIconId: (id: number) => void;
};

function IconSquare(props: IconSquareProps) {
  const { icon, iconId, selectedId, handleIconId } = props;

  return (
    <div
      className={`${styles.iconSquare} ${selectedId === iconId ? styles.selectedIcon : ''}`}
      onClick={() => handleIconId(iconId)}
    >
      {icon}
    </div>
  );
}

export default IconSquare;
