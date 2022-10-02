import { useEffect, useRef, useState } from 'react';
import modalStyles from '../../styles/todoCreatorStyles.module.scss';
import titleStyle from '../../styles/completedTodosMenuStyles.module.scss';
import buttonStyles from '../../styles/buttons.module.scss';
import styles from '../../styles/filterMenuStyles.module.scss';
import { assertIsNode, ToDo, FilterType, sortTasks } from '../../utils';

type FilterModalProps = {
  todos: ToDo[];
  toggleFilterModal: () => void;
};

function FilterModal(props: FilterModalProps) {
  const { todos, toggleFilterModal } = props;

  const [firstFilter, setFirstFilter] = useState<FilterType>('None');
  const [secondFilter, setSecondFilter] = useState<FilterType>('None');

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

  const handleFirstFilter = (e: any) => {
    setFirstFilter(e.target.value);
  };
  const handleSecondFilter = (e: any) => {
    setSecondFilter(e.target.value);
  };
  sortTasks(firstFilter, secondFilter, todos);
  return (
    <div className={modalStyles.mainWrapper}>
      <div ref={modal} className={modalStyles.modalWrapper}>
        <div className={titleStyle.title}>Filter Tasks</div>

        <div className={styles.mainContent}>
          <div className={styles.filterTitle}>First Filter</div>
          <select onChange={handleFirstFilter} value={firstFilter}>
            <option value="None">None</option>
            <option value="High to Low Priority">High to Low Priority</option>
            <option value="Low to High Priority">Low to High Priority</option>
            <option value="Colour">Colour</option>
            <option value="Icon">Icon</option>
          </select>

          <div className={styles.filterTitle}>Second Filter</div>
          <select onChange={handleSecondFilter} value={secondFilter}>
            <option value="None">None</option>
            <option value="High to Low Priority">High to Low Priority</option>
            <option value="Low to High Priority">Low to High Priority</option>
            <option value="Colour">Colour</option>
            <option value="Icon">Icon</option>
          </select>

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
