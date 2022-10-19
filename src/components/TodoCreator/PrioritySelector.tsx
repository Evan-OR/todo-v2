import stlyes from "../../styles/todoCreatorStyles.module.scss";
import { Priority, PriorityNames } from "../../utils";

type PrioritySelectorProps = {
  priority: Priority;
  handlePrioritySelector: (c: any) => void;
};

function PrioritySelector(props: PrioritySelectorProps) {
  const { priority, handlePrioritySelector } = props;

  const pArray: Priority[] = [0, 1, 2, 3];

  return (
    <select
      onChange={handlePrioritySelector}
      className={`${stlyes.prioritySelectWrapper} ${stlyes[priority]}`}
      name="Priority"
      value={priority}
    >
      {pArray.map((el) => (
        <option style={{ background: "#ececec" }} key={el} value={el}>
          {PriorityNames[el]}
        </option>
      ))}
    </select>
  );
}

export default PrioritySelector;
