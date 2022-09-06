import { useEffect, useRef } from 'react';
import stlyes from '../../styles/todoCreatorStyles.module.scss';
import ColourChooser from './ColourChooser';
import IconChooser from './IconChooser';

type TodoCreatorProps = {
  show: boolean;
  toggleToDoCreator: () => void;
};

function TodoCreator(props: TodoCreatorProps) {
  const { show, toggleToDoCreator } = props;

  const form = useRef<HTMLFormElement>(null);
  const title = useRef<HTMLInputElement>(null);

  useEffect(() => {
    title.current?.focus();
  }, []);

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
          <div>Title</div>
          <input ref={title} type="text"></input>
          <div>Desc</div>
          <input type="text"></input>
          <div>Icon</div>
          <IconChooser />
          <div>Colour</div>
          <ColourChooser />
          <div>Due Date {'&'} Time</div>
          <input type="datetime-local"></input>
        </form>
      </div>
    </div>
  );
}

export default TodoCreator;
