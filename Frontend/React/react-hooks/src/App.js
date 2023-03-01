import logo from './logo.svg';
import './App.css';
import UseStateHook from './hooks/useStateHook'
import ContextHook from './hooks/useContextHook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Hooks
      </header>
      <UseStateHook />
      <ContextHook />
    </div>
  );
}

export default App;
