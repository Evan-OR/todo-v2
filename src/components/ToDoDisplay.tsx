import styles from '../styles/todoStyles.module.scss';
import { Icons, ToDo, Priority, PriorityColours, PriorityNames } from '../utils';

type ToDoDisplayProps = {
  todo: ToDo;
  toggleToDoCreator: (todo: ToDo | null) => void;
  completeTodo: (todo: ToDo) => void;
};

function ToDoDisplay(props: ToDoDisplayProps) {
  const { todo, toggleToDoCreator, completeTodo } = props;

  // const p = getPriorityColour(todo.priority);

  return (
    <div className={styles.todoWrapper} style={{ background: todo.colour }}>
      <div className={styles.icon}>{Icons[todo.iconId]}</div>

      <div className={styles.title}>{todo.title}</div>

      <div
        onClick={() => completeTodo(todo)}
        className={`${styles.priority} ${styles.completedButton}`}
        title="Completed"
      >
        ✓
      </div>

      <div
        title={`${PriorityNames[todo.priority]} Priority`}
        className={styles.priority}
        style={{
          background: PriorityColours[todo.priority],
          opacity: todo.priority,
        }}
      >
        <div>{PriorityNames[todo.priority].substring(0, 1)}</div>
      </div>

      <svg
        onClick={() => toggleToDoCreator(todo)}
        className={styles.editIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
      </svg>
    </div>
  );
}

export default ToDoDisplay;
