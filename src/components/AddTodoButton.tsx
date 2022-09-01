import style from '../styles/buttons.module.scss';
import plusIcon from '../img/plus-solid.svg';

function AddTodoButton() {
  return (
    <div className={style.defaultBtn}>
      <div>Add To-Do</div> <img className={style.icon} src={plusIcon} width={'16px'}></img>
    </div>
  );
}

export default AddTodoButton;
