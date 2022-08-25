import AppHeader from './components/AppHeader';
import DateAndTimeDisplay from './components/DateAndTimeDisplay';
import TodoDisplayWrapper from './components/TodoDisplayWrapper';
import './styles/App.css';

function App() {
  return (
    <div className="appWrapper">
      <AppHeader />
      <DateAndTimeDisplay />
      <TodoDisplayWrapper />
    </div>
  );
}

export default App;
