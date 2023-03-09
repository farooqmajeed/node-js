import logo from './logo.svg';
import './App.css';
import UseStateHook from './hooks/useStateHook'
import ContextHook from './hooks/useContextHook'
import CallBackHook from './hooks/useCallbackHook';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        React Hooks
      </header>
      <UseStateHook />
      <ContextHook /> */}
      <CallBackHook />
    </div>
  );
}

export default App;
