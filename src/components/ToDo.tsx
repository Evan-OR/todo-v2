import styles from '../styles/todoStyles.module.scss';
import icon from '../img/code-solid.svg';

function ToDo() {
  return (
    <div className={styles.todoWrapper}>
      <div className={styles.icon}>
        <img src={icon} width={'26px'}></img>
      </div>
      <div className={styles.title}>Prepare for tech interview</div>
      <div className={styles.due}>3 Days</div>
    </div>
  );
}

export default ToDo;
