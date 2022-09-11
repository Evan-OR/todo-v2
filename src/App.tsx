import { useState } from 'react';
import { ToDo } from './utils';
import AddTodoButton from './components/AddTodoButton';
import DateAndTimeDisplay from './components/DateAndTimeDisplay';
import TodoCreator from './components/TodoCreator/TodoCreator';
import TodoDisplayWrapper from './components/TodoDisplayWrapper';
import './styles/App.css';

function App() {
  const [showToDoCreator, setShowToDoCreator] = useState<boolean>(false);
  const [todos, setTodos] = useState<ToDo[]>([
    { title: 'Thing', desc: '', iconId: 1, colour: '', priority: 'Medium' },
    { title: 'Other Thing', desc: '', iconId: 6, colour: '', priority: 'Low' },
  ]);

  const toggleToDoCreator = () => {
    setShowToDoCreator(!showToDoCreator);
  };

  return (
    <div className="appWrapper">
      {showToDoCreator ? <TodoCreator toggleToDoCreator={toggleToDoCreator} /> : <></>}
      <DateAndTimeDisplay />
      <AddTodoButton toggleToDoCreator={toggleToDoCreator} />
      <TodoDisplayWrapper toDosArray={todos} />
    </div>
  );
}

export default App;
