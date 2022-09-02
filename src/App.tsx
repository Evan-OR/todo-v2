import { useState } from 'react';
import AddTodoButton from './components/AddTodoButton';
import DateAndTimeDisplay from './components/DateAndTimeDisplay';
import TodoCreator from './components/TodoCreator';
import TodoDisplayWrapper from './components/TodoDisplayWrapper';
import './styles/App.css';

function App() {
  const [showToDoCreator, setShowToDoCreator] = useState<boolean>(false);

  const toggleToDoCreator = () => {
    setShowToDoCreator(!showToDoCreator);
    console.log(showToDoCreator);
  };

  return (
    <div className="appWrapper">
      <TodoCreator show={showToDoCreator} toggleToDoCreator={toggleToDoCreator} />
      <DateAndTimeDisplay />
      <AddTodoButton toggleToDoCreator={toggleToDoCreator} />
      <TodoDisplayWrapper />
    </div>
  );
}

export default App;
