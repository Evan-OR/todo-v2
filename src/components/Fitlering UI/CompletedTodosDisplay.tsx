import modalStyles from '../../styles/todoCreatorStyles.module.scss';
import styles from '../../styles/completedTodosMenuStyles.module.scss';
import { ToDo } from '../../utils';

type CompletedTodosDisplayProps = {
  todos: ToDo[];
};

function CompletedTodosDisplay(props: CompletedTodosDisplayProps) {
  return (
    <div className={modalStyles.mainWrapper}>
      <div className={modalStyles.modalWrapper}>
        <div className={styles.title}>Completed Tasks</div>
      </div>
    </div>
  );
}

export default CompletedTodosDisplay;
