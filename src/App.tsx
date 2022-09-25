import { useEffect, useState } from 'react';
import { ToDo, checkIfTodoExists } from './utils';
import AddTodoButton from './components/AddTodoButton';
import DateAndTimeDisplay from './components/DateAndTimeDisplay';
import TodoCreator from './components/TodoCreator/TodoCreator';
import TodoDisplayWrapper from './components/TodoDisplayWrapper';
import './styles/App.scss';
import FilterMenu from './components/Fitlering UI/FilterMenu';
import CompletedTodosDisplay from './components/Fitlering UI/CompletedTodosDisplay';

function App() {
  const [showToDoCreator, setShowToDoCreator] = useState<boolean>(false);
  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 1,
      title: 'Feed the cat',
      desc: 'This one has a description',
      iconId: 8,
      colour: '#ececec',
      priority: 'High',
    },
    { id: 2, title: 'Clean house', desc: '', iconId: 1, colour: '#ececec', priority: 'Medium' },
    { id: 3, title: 'Do the shopping', desc: '', iconId: 6, colour: '#ececec', priority: 'Low' },
  ]);
  const [completedTodos, setCompletedTodos] = useState<ToDo[]>([]);
  const [editTodo, setEditTodo] = useState<ToDo | null>(null);

  useEffect(() => {
    console.log(completedTodos);
  }, [completedTodos]);

  const toggleToDoCreator = (todo: ToDo | null): void => {
    setEditTodo(todo);
    setShowToDoCreator(!showToDoCreator);
  };

  const addTodo = (todo: ToDo): void => {
    if (!checkIfTodoExists(todo, todos)) {
      let newArray = [...todos, todo];
      setTodos(newArray);
    } else {
      let index: number = 0;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === todo.id) index = i;
      }
      let newArray = [...todos];
      newArray[index] = todo;
      setTodos(newArray);
    }
  };

  const removeTodo = (todo: ToDo): void => {
    const newArray = [...todos];
    newArray.splice(todos.indexOf(todo), 1);
    setTodos(newArray);
  };

  const completeTodo = (todo: ToDo): void => {
    //Remove todo from active todos
    const newTodoArray = [...todos];
    newTodoArray.splice(todos.indexOf(todo), 1);
    setTodos(newTodoArray);

    //Add todo to completed todos
    let newCompletedTodoArray = [...completedTodos, todo];
    setCompletedTodos(newCompletedTodoArray);
  };

  return (
    <div className="appWrapper">
      {showToDoCreator ? (
        <TodoCreator todo={editTodo} toggleToDoCreator={toggleToDoCreator} addTodo={addTodo} removeTodo={removeTodo} />
      ) : (
        <></>
      )}
      {/* <CompletedTodosDisplay todos={[]} /> */}
      <DateAndTimeDisplay />
      <AddTodoButton toggleToDoCreator={toggleToDoCreator} />
      <FilterMenu />
      <TodoDisplayWrapper toDosArray={todos} toggleToDoCreator={toggleToDoCreator} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
