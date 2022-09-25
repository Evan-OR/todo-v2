import { ToDo, Icons } from '../../utils';
import todoStyles from '../../styles/todoStyles.module.scss';
import styles from '../../styles/completedTodosMenuStyles.module.scss';

type CompletedTodosDisplayProps = {
  todo: ToDo;
  returnToDo: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
};

function CompletedTodosDisplay(props: CompletedTodosDisplayProps) {
  const { todo, returnToDo, deleteTodo } = props;
  return (
    <div
      className={todoStyles.todoWrapper}
      style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: todo.colour }}
    >
      <div className={todoStyles.icon}>{Icons[todo.iconId]}</div>
      <div className={todoStyles.title}>{todo.title}</div>

      <div onClick={() => returnToDo(todo)} className={styles.returnTodo}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
        </svg>
      </div>
      <div onClick={() => deleteTodo(todo)} className={styles.deleteTodo}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
        </svg>
      </div>
    </div>
  );
}

export default CompletedTodosDisplay;
