import styles from '../styles/todoStyles.module.scss';
import ToDoDisplay from './ToDoDisplay';
import { ToDo } from '../utils';

type TodoDisplayProps = {
  toDosArray: ToDo[];
  toggleToDoCreator: (todo: ToDo | null) => void;
  completeTodo: (todo: ToDo) => void;
};
function TodoDisplayWrapper(props: TodoDisplayProps) {
  const { toDosArray, toggleToDoCreator, completeTodo } = props;

  return (
    <div className={styles.main}>
      {toDosArray.length !== 0 ? (
        toDosArray.map((toDo, idx) => (
          <ToDoDisplay
            key={`${idx}${toDo.priority}`}
            todo={toDo}
            toggleToDoCreator={toggleToDoCreator}
            completeTodo={completeTodo}
          />
        ))
      ) : (
        <div style={{ marginTop: '80px' }}>Add Something To Your Task List</div>
      )}
    </div>
  );
}

export default TodoDisplayWrapper;
