import { useEffect, useRef, useState } from 'react';
import stlyes from '../../styles/todoCreatorStyles.module.scss';
import ButtonStlyes from '../../styles/buttons.module.scss';
import ColourChooser from './ColourChooser';
import IconChooser from './IconChooser';
import PrioritySelector from './PrioritySelector';
import { Priority, assertIsNode } from '../../utils';
import BottomFade from './BottomFade';
import CloseFormButton from './CloseFormButton';

type TodoCreatorProps = {
  toggleToDoCreator: () => void;
};

function TodoCreator(props: TodoCreatorProps) {
  const { toggleToDoCreator } = props;

  let [titleValue, setTitleValue] = useState<string>('');
  let [descriptionValue, setDescriptionValue] = useState<string>('');
  let [iconId, setIconId] = useState<number>(0);
  let [colour, setColour] = useState<string>('#ececec');
  let [priority, setPriority] = useState<Priority>('None');

  const modal = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLInputElement>(null);

  useEffect(() => {
    title.current?.focus();

    let handler = (event: MouseEvent) => {
      console.log('called');
      assertIsNode(event.target);
      if (!modal.current?.contains(event.target)) {
        toggleToDoCreator();
      }
    };
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);
  // useEffect(() => {
  //   console.log(priority);
  // }, [priority]);

  const handleTitleInput = (e: any) => {
    setTitleValue(e.target.value);
  };
  const handleDescriptionInput = (e: any) => {
    setDescriptionValue(e.target.value);
  };

  const handleIconId = (id: number) => {
    setIconId(id);
  };

  const handleColour = (c: string) => {
    setColour(c);
  };

  const handlePrioritySelector = (e: any) => {
    setPriority(e.target.value);
  };

  return (
    <div className={stlyes.mainWrapper}>
      <div ref={modal} className={stlyes.modalWrapper}>
        <form className={stlyes.form}>
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
          <ColourChooser handleColour={handleColour} selectedColour={colour} />

          <div className={stlyes.title}>Priority</div>
          <PrioritySelector handlePrioritySelector={handlePrioritySelector} priority={priority} />

          <div className={`${ButtonStlyes.addBtn} ${stlyes.submitButton}`}>
            <div>Submit</div>{' '}
            <svg className={ButtonStlyes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </form>
        <BottomFade />
        <CloseFormButton toggleToDoCreator={toggleToDoCreator} />
      </div>
    </div>
  );
}

export default TodoCreator;
