import { useEffect, useRef, useState } from 'react';
import stlyes from '../../styles/todoCreatorStyles.module.scss';
import ButtonStlyes from '../../styles/buttons.module.scss';
import ColourChooser from './ColourChooser';
import IconChooser from './IconChooser';

type TodoCreatorProps = {
  show: boolean;
  toggleToDoCreator: () => void;
};

function TodoCreator(props: TodoCreatorProps) {
  const { show, toggleToDoCreator } = props;

  let [titleValue, setTitleValue] = useState<string>('');
  let [descriptionValue, setDescriptionValue] = useState<string>('');
  let [iconId, setIconId] = useState<number>(0);

  const form = useRef<HTMLFormElement>(null);
  const title = useRef<HTMLInputElement>(null);

  useEffect(() => {
    title.current?.focus();
  }, []);
  // useEffect(() => {
  //   console.log(iconId);
  // }, [iconId]);

  const handleTitleInput = (e: any) => {
    setTitleValue(e.target.value);
  };
  const handleDescriptionInput = (e: any) => {
    setDescriptionValue(e.target.value);
  };

  const handleIconId = (id: number) => {
    setIconId(id);
  };

  return (
    <div className={`${stlyes.mainWrapper} ${show ? '' : stlyes.hide}`}>
      <div className={stlyes.modalWrapper}>
        <form ref={form} className={stlyes.form}>
          <svg
            onClick={() => {
              toggleToDoCreator();
            }}
            className={stlyes.closeButton}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <div className={stlyes.title}>Title</div>
          <input
            ref={title}
            value={titleValue}
            onChange={handleTitleInput}
            type="text"
            placeholder="Interview Prep"
          ></input>

          <div className={stlyes.title}>Desc</div>
          <input
            type="text"
            value={descriptionValue}
            onChange={handleDescriptionInput}
            placeholder="Grind LeetCode"
          ></input>

          <div className={stlyes.title}>Icon</div>
          <IconChooser selectedId={iconId} handleIconId={handleIconId} />

          <div className={stlyes.title}>Colour</div>
          <ColourChooser />

          <div className={stlyes.title}>Due Date {'&'} Time</div>
          <input type="datetime-local"></input>

          <div className={`${ButtonStlyes.addBtn} ${stlyes.submitButton}`}>
            <div>Submit</div>{' '}
            <svg className={ButtonStlyes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoCreator;
