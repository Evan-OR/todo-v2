import styles from '../styles/todoStyles.module.scss';
import ToDo from './ToDo';

type TodoDisplayProps = {};
function TodoDisplayWrapper(props: TodoDisplayProps) {
  return (
    <div className={styles.main}>
      <ToDo />
      <ToDo />
      <ToDo />
    </div>
  );
}

export default TodoDisplayWrapper;
