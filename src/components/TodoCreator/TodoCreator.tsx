import { useEffect, useRef, useState } from 'react';
import stlyes from '../../styles/todoCreatorStyles.module.scss';
import ButtonStlyes from '../../styles/buttons.module.scss';
import ColourChooser from './ColourChooser';
import IconChooser from './IconChooser';
import PrioritySelector from './PrioritySelector';
import { Priority, assertIsNode, ToDo } from '../../utils';
import BottomFade from './BottomFade';
import CloseFormButton from './CloseFormButton';
import SubmitButton from './SubmitButton';
import RemoveButton from './RemoveButton';
import RequiredFieldAlert from './RequiredFieldAlert';

type TodoCreatorProps = {
  toggleToDoCreator: (todo: ToDo | null) => void;
  addTodo: (todo: ToDo) => void;
  removeTodo: (todo: ToDo) => void;
  todo: ToDo | null;
};

function TodoCreator(props: TodoCreatorProps) {
  const { toggleToDoCreator, addTodo, removeTodo, todo } = props;

  let [titleValue, setTitleValue] = useState<string>('');
  let [descriptionValue, setDescriptionValue] = useState<string>('');
  let [iconId, setIconId] = useState<number>(0);
  let [colour, setColour] = useState<string>('#ececec');
  let [priority, setPriority] = useState<Priority>('None');

  let [showRequiredFields, setShowRequiredFields] = useState(false);

  const modal = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLInputElement>(null);

  const checkIfTodoWasPassed = () => {
    if (!todo) return;

    setTitleValue(todo.title);
    setIconId(todo.iconId);
    setColour(todo.colour);
    setPriority(todo.priority);
    if (todo.desc) {
      setDescriptionValue(todo.desc);
    }
  };

  useEffect(() => {
    //On Mount Set Up
    checkIfTodoWasPassed();
    title.current?.focus();

    const handler = (event: MouseEvent) => {
      assertIsNode(event.target);
      if (!modal.current?.contains(event.target)) {
        toggleToDoCreator(null);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  //#region Form Handlers
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

  const submitHandler = () => {
    if (!titleValue) {
      setShowRequiredFields(true);
      return;
    }
    const d = new Date();
    let finalTodoInformation: ToDo = {} as ToDo;

    finalTodoInformation.title = titleValue;
    finalTodoInformation.desc = descriptionValue;
    finalTodoInformation.iconId = iconId;
    finalTodoInformation.colour = colour;
    finalTodoInformation.priority = priority;

    todo ? (finalTodoInformation.id = todo.id) : (finalTodoInformation.id = d.getTime());

    addTodo(finalTodoInformation);
    toggleToDoCreator(null);
  };

  const removeHandler = () => {
    if (!todo) return;
    removeTodo(todo);
    toggleToDoCreator(null);
  };

  const formPreventDefault = (e: any) => {
    e.preventDefault();
    submitHandler();
  };
  //#endregion

  return (
    <div className={stlyes.mainWrapper}>
      <div ref={modal} className={stlyes.modalWrapper}>
        <form className={stlyes.form} onSubmit={formPreventDefault}>
          <div className={stlyes.title}>
            Title
            {showRequiredFields ? <RequiredFieldAlert message="*Required Field" /> : <></>}
          </div>
          <input
            ref={title}
            value={titleValue}
            onChange={handleTitleInput}
            type="text"
            placeholder="Interview Prep"
            required
          ></input>

          {/* <div className={stlyes.title}>Desc</div>
          <input
            type="text"
            value={descriptionValue}
            onChange={handleDescriptionInput}
            placeholder="Grind LeetCode"
          ></input> */}

          <div className={stlyes.title}>Icon</div>
          <IconChooser selectedId={iconId} handleIconId={handleIconId} />

          <div className={stlyes.title}>Colour</div>
          <ColourChooser handleColour={handleColour} selectedColour={colour} />

          <div className={stlyes.title}>Priority</div>
          <PrioritySelector handlePrioritySelector={handlePrioritySelector} priority={priority} />

          <div className={stlyes.submitButton}>
            <SubmitButton submitHandler={submitHandler} />
            {todo ? <RemoveButton removeHandler={removeHandler} /> : <></>}
          </div>
        </form>
        <BottomFade />
        <CloseFormButton toggleToDoCreator={toggleToDoCreator} />
      </div>
    </div>
  );
}

export default TodoCreator;
