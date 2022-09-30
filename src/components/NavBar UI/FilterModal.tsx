import { useEffect, useRef } from 'react';
import modalStyles from '../../styles/todoCreatorStyles.module.scss';
import { assertIsNode, ToDo } from '../../utils';

type FilterModalProps = {
  todos: ToDo[];
  toggleFilterModal: () => void;
};

function FilterModal(props: FilterModalProps) {
  const { todos, toggleFilterModal } = props;
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      assertIsNode(event.target);
      if (!modal.current?.contains(event.target)) {
        toggleFilterModal();
      }
    };
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className={modalStyles.mainWrapper}>
      <div ref={modal} className={modalStyles.modalWrapper}></div>
    </div>
  );
}

export default FilterModal;
