import styles from '../styles/todoStyles.module.scss';
import programmingIcon from '../img/code-solid.svg';
import editIcon from '../img/pen-to-square-solid.svg';

function ToDo() {
  return (
    <div className={styles.todoWrapper}>
      <div className={styles.icon}>
        <img src={programmingIcon} width={'22px'}></img>
      </div>
      <div className={styles.title}>Prepare for tech interview</div>
      <div className={styles.due}>3 Days</div>
      <img className={styles.editIcon} src={editIcon} alt="Edit Icon" width={'18px'} color={'#fffff'}></img>
    </div>
  );
}

export default ToDo;
