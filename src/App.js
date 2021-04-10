import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import HookCounter from './Components/HookCounter';

function App() {
  return (
    <div>
      <h1>Hooks App</h1>
      <Counter></Counter>
      <HookCounter></HookCounter>
    </div>
  );
}

export default App;
