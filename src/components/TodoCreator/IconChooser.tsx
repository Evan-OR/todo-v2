import styles from '../../styles/todoCreatorStyles.module.scss';
import IconSquare from './IconSquare';
import { Icons } from '../../utils';

type IconChooserProps = {
  handleIconId: (id: number) => void;
  selectedId: number;
};

function IconChooser(props: IconChooserProps) {
  const { handleIconId, selectedId } = props;

  return (
    <div className={styles.iconSquareWrapper}>
      {Icons.map((el, idx) => (
        <IconSquare key={idx} selectedId={selectedId} iconId={idx} icon={el} handleIconId={handleIconId} />
      ))}
    </div>
  );
}

export default IconChooser;
