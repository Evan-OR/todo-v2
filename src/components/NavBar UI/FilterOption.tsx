import styles from '../../styles/filterMenuStyles.module.scss';

function FilterOption() {
  return (
    <select>
      <option value="None">None</option>
      <option value="Priority">Priority</option>
      <option value="Colour">Colour</option>
      <option value="Icon">Icon</option>
    </select>
  );
}

export default FilterOption;
