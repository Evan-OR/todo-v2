import style from '../../styles/todoCreatorStyles.module.scss';
import { ToDo } from '../../utils';

type CloseFormButtonProps = {
  toggleToDoCreator: (todo: ToDo | null) => void;
};

function CloseFormButton(props: CloseFormButtonProps) {
  const { toggleToDoCreator } = props;

  return (
    <div className={style.closeButtonWrapper}>
      <div className={style.closeIcon}>
        <svg onClick={() => toggleToDoCreator(null)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
    </div>
  );
}

export default CloseFormButton;
