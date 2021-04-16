//import logo from './logo.svg';
import './App.css';
import Counter from './Components/StateHooks/Counter'
import DataFetching from './Components/EffectHooks/DataFetching';
import EffectCounter1 from './Components/EffectHooks/EffectCounter1';
import HookCounter from './Components/StateHooks/HookCounter';
import HookCounter3 from './Components/StateHooks/HookCounter3';
import HookCounter4 from './Components/StateHooks/HookCounter4';
import HookMouse from './Components/EffectHooks/HookMouse';
import IntervalHookCounter from './Components/EffectHooks/IntervalHookCounter';
import MouseContainer from './Components/EffectHooks/MouseContainer';
import ComponentA from './Components/ContextHooks/ComponentA';
import React from 'react';

export const UserContext = React.createContext()
export const AddressContext = React.createContext()

function App() {
  return (
    <div>
      <h1>Hooks App</h1>
      {/* <Counter></Counter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounter3></HookCounter3> */}
      {/* <HookCounter4></HookCounter4> */}
      {/* <EffectCounter1></EffectCounter1> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching></DataFetching> */}
      <UserContext.Provider value={'Sherlock Holmes'}>
        <AddressContext.Provider value={'221 B, Baker Street'}>
        <ComponentA></ComponentA>
        </AddressContext.Provider>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
