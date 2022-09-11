import styles from '../styles/todoStyles.module.scss';
import ToDoDisplay from './ToDoDisplay';
import { ToDo } from '../utils';

type TodoDisplayProps = {
  toDosArray: ToDo[];
};
function TodoDisplayWrapper(props: TodoDisplayProps) {
  const { toDosArray } = props;

  return (
    <div className={styles.main}>
      {toDosArray.map((toDo) => (
        <ToDoDisplay todo={toDo} />
      ))}
    </div>
  );
}

export default TodoDisplayWrapper;
