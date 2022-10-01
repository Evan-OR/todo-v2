import { useEffect, useRef } from 'react';
import modalStyles from '../../styles/todoCreatorStyles.module.scss';
import titleStyle from '../../styles/completedTodosMenuStyles.module.scss';
import buttonStyles from '../../styles/buttons.module.scss';
import styles from '../../styles/filterMenuStyles.module.scss';
import { assertIsNode, ToDo } from '../../utils';
import FilterOption from './FilterOption';

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
      <div ref={modal} className={modalStyles.modalWrapper}>
        <div className={titleStyle.title}>Filter Tasks</div>

        <div className={styles.mainContent}>
          <div className={styles.filterTitle}>First Filter</div>
          <FilterOption />
          <div className={styles.filterTitle}>Second Filter</div>
          <FilterOption />

          <div className={`${buttonStyles.defaultbtn} ${buttonStyles.addBtn}`} style={{ width: 'fit-content' }}>
            Apply Filter
          </div>
        </div>

        {/* Close Button */}
        <div className={modalStyles.closeButtonWrapper}>
          <div className={modalStyles.closeIcon}>
            <svg onClick={() => toggleFilterModal()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
