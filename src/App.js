//import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import EffectCounter1 from './Components/EffectCounter1';
import HookCounter from './Components/HookCounter';
import HookCounter3 from './Components/HookCounter3';
import HookCounter4 from './Components/HookCounter4';

function App() {
  return (
    <div>
      <h1>Hooks App</h1>
      <Counter></Counter>
      <HookCounter></HookCounter>
      <HookCounter3></HookCounter3>
      <HookCounter4></HookCounter4>
      <EffectCounter1></EffectCounter1>
    </div>
  );
}

export default App;
