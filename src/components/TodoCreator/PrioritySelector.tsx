import stlyes from '../../styles/todoCreatorStyles.module.scss';
import { Priority } from '../../utils';

type PrioritySelectorProps = {
  priority: Priority;
  handlePrioritySelector: (c: any) => void;
};

function PrioritySelector(props: PrioritySelectorProps) {
  const { priority, handlePrioritySelector } = props;

  const pArray: Priority[] = ['None', 'Low', 'Medium', 'High'];

  return (
    <select
      onChange={handlePrioritySelector}
      className={`${stlyes.prioritySelectWrapper} ${stlyes[priority]}`}
      name="Priority"
      value={priority}
    >
      {pArray.map((el) => (
        <option style={{ background: '#ececec' }} key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}

export default PrioritySelector;
