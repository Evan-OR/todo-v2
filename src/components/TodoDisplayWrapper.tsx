import styles from '../styles/todoStyles.module.scss';
import ToDoDisplay from './ToDoDisplay';
import { ToDo } from '../utils';

type TodoDisplayProps = {
  toDosArray: ToDo[];
  toggleToDoCreator: (todo: ToDo | null) => void;
};
function TodoDisplayWrapper(props: TodoDisplayProps) {
  const { toDosArray, toggleToDoCreator } = props;

  return (
    <div className={styles.main}>
      {toDosArray.length !== 0 ? (
        toDosArray.map((toDo, idx) => (
          <ToDoDisplay key={`${idx}${toDo.priority}`} todo={toDo} toggleToDoCreator={toggleToDoCreator} />
        ))
      ) : (
        <div style={{ marginTop: '80px' }}>Add Something To Your To-Do List</div>
      )}
    </div>
  );
}

export default TodoDisplayWrapper;
