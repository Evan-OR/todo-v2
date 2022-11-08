import { useEffect, useState } from 'react';
import { ToDo, checkIfTodoExists, sortTodos, readLocalStorage, writeToLocalStorage } from './utils';
import AddTodoButton from './components/AddTodoButton';
import DateAndTimeDisplay from './components/DateAndTimeDisplay';
import TodoCreator from './components/TodoCreator/TodoCreator';
import TodoDisplayWrapper from './components/TodoDisplayWrapper';
import './styles/App.scss';
import FilterMenu from './components/NavBar UI/FilterMenu';
import CompletedTodosDisplay from './components/NavBar UI/CompletedTodosModal';
import FilterModal from './components/NavBar UI/FilterModal';

function App() {
  const [showToDoCreator, setShowToDoCreator] = useState<boolean>(false);
  const [showCompletedTodoMenu, setShowCompletedTodoMenu] = useState<boolean>(false);
  const [showFilterModalMenu, setShowFilterModalMenu] = useState<boolean>(false);
  const [todos, setTodos] = useState<ToDo[]>(readLocalStorage('todos'));
  const [completedTodos, setCompletedTodos] = useState<ToDo[]>(readLocalStorage('completedTodos'));
  const [editTodo, setEditTodo] = useState<ToDo | null>(null);

  useEffect(() => {
    writeToLocalStorage(todos, 'todos');
  }, [todos]);
  useEffect(() => {
    writeToLocalStorage(completedTodos, 'completedTodos');
  }, [completedTodos]);

  const toggleToDoCreator = (todo: ToDo | null): void => {
    setEditTodo(todo);
    setShowToDoCreator(!showToDoCreator);
  };

  const toggleCompletedTodoView = (): void => {
    setShowCompletedTodoMenu(!showCompletedTodoMenu);
  };

  const toggleFilterModal = (): void => {
    setShowFilterModalMenu(!showFilterModalMenu);
  };

  //#region todo functions
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

  const returnToDo = (todo: ToDo): void => {
    //Add todo back to active todo array
    let newArray = [...todos, todo];
    setTodos(newArray);

    //Remove todo from completed todo array
    const newTodoArray = [...completedTodos];
    newTodoArray.splice(completedTodos.indexOf(todo), 1);
    setCompletedTodos(newTodoArray);
  };
  const deleteTodo = (todo: ToDo): void => {
    //Remove todo from completed todo array
    const newTodoArray = [...completedTodos];
    newTodoArray.splice(completedTodos.indexOf(todo), 1);
    setCompletedTodos(newTodoArray);
  };

  const applyTodoFilter = (newTodos: ToDo[]) => {
    setTodos([...newTodos]);
  };
  //#endregion

  console.log(sortTodos('Icon', todos)?.map((el) => el.iconId));
  return (
    <div className="appWrapper">
      {showToDoCreator ? (
        <TodoCreator todo={editTodo} toggleToDoCreator={toggleToDoCreator} addTodo={addTodo} removeTodo={removeTodo} />
      ) : (
        <></>
      )}
      {showCompletedTodoMenu ? (
        <CompletedTodosDisplay
          todos={completedTodos}
          toggleCompletedTodoView={toggleCompletedTodoView}
          returnToDo={returnToDo}
          deleteTodo={deleteTodo}
        />
      ) : (
        <></>
      )}
      {showFilterModalMenu ? (
        <FilterModal todos={todos} toggleFilterModal={toggleFilterModal} applyFilter={applyTodoFilter} />
      ) : (
        <></>
      )}
      <DateAndTimeDisplay />
      <AddTodoButton toggleToDoCreator={toggleToDoCreator} />
      <FilterMenu toggleFilterModal={toggleFilterModal} toggleCompletedTodoView={toggleCompletedTodoView} />
      <TodoDisplayWrapper toDosArray={todos} toggleToDoCreator={toggleToDoCreator} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
