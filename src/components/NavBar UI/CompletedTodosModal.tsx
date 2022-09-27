import modalStyles from '../../styles/todoCreatorStyles.module.scss';
import styles from '../../styles/completedTodosMenuStyles.module.scss';
import closeButton from '../../styles/todoCreatorStyles.module.scss';
import { assertIsNode, ToDo } from '../../utils';
import { useEffect, useRef } from 'react';
import CompletedTodosDisplay from './CompletedTodosDisplay';

type CompletedTodosModalProps = {
  todos: ToDo[];
  toggleCompletedTodoView: () => void;
  returnToDo: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
};

function CompletedTodosModal(props: CompletedTodosModalProps) {
  const { todos, toggleCompletedTodoView, returnToDo, deleteTodo } = props;
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      assertIsNode(event.target);
      if (!modal.current?.contains(event.target)) {
        toggleCompletedTodoView();
      }
    };
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className={modalStyles.mainWrapper}>
      <div ref={modal} className={modalStyles.modalWrapper}>
        <div className={styles.title}>Completed Tasks</div>
        <div>
          {todos.length > 0 ? (
            todos.map((el) => (
              <CompletedTodosDisplay key={el.id} todo={el} returnToDo={returnToDo} deleteTodo={deleteTodo} />
            ))
          ) : (
            <div className={styles.mes}>You have no completed tasks</div>
          )}
        </div>

        {/* close button */}
        <div className={closeButton.closeButtonWrapper}>
          <div className={closeButton.closeIcon}>
            <svg onClick={() => toggleCompletedTodoView()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedTodosModal;
