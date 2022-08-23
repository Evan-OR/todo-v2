import React from 'react';
import AppHeader from './components/AppHeader';
import TodoDisplay from './components/TodoDisplayWrapper';
import './styles/App.css';

function App() {
  return (
    <div className="appWrapper">
      <AppHeader />
      <TodoDisplay />
    </div>
  );
}

export default App;
