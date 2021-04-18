//import logo from './logo.svg';
import './App.css';
import Counter from './Components/StateHooks/Counter'
import DataFetching from './Components/DataFetch/DataFetching';
import EffectCounter1 from './Components/EffectHooks/EffectCounter1';
import HookCounter from './Components/StateHooks/HookCounter';
import HookCounter3 from './Components/StateHooks/HookCounter3';
import HookCounter4 from './Components/StateHooks/HookCounter4';
import HookMouse from './Components/EffectHooks/HookMouse';
import IntervalHookCounter from './Components/EffectHooks/IntervalHookCounter';
import MouseContainer from './Components/EffectHooks/MouseContainer';
import ComponentA from './Components/ContextHooks/ComponentA';
import React, {useReducer} from 'react';
import CounterOne from './Components/ReducerHooks/CounterOne';
import CounterTwo from './Components/ReducerHooks/CounterTwo';
import MultipleReducer from './Components/ReducerHooks/MultipleReducer';
import ComponentOne from './Components/ReducerWithContext/ComponentOne';
import DFuseEffect from './Components/DataFetch/DFuseState';
import DFuseState from './Components/DataFetch/DFuseState';
import DFuseReducer from './Components/DataFetch/DFuseReducer';

export const UserContext = React.createContext()
export const AddressContext = React.createContext()

export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (currentState, action) => {
//     switch(action){
//         case 'increment':
//             return currentState + 1
//         case 'decrement':
//             return currentState - 1
//         case 'reset':
//             return initialState
//         default :
//         return currentState
//     }

// }

function App() {
  // const [newState, dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>Hooks App</h1>
      {/* <CountContext.Provider 
      value = {{countState : newState, countDispatch : dispatch}}>
        <div>
          Count - {newState}
          <ComponentOne></ComponentOne>
        </div>
      </CountContext.Provider> */}
      {/* <Counter></Counter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounter3></HookCounter3> */}
      {/* <HookCounter4></HookCounter4> */}
      {/* <EffectCounter1></EffectCounter1> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching></DataFetching> */}
      {/* <UserContext.Provider value={'Sherlock Holmes'}>
        <AddressContext.Provider value={'221 B, Baker Street'}>
        <ComponentA></ComponentA>
        </AddressContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <MultipleReducer></MultipleReducer> */}
      {/* <DFuseState></DFuseState> */}
      <DFuseReducer></DFuseReducer>

    </div>
  );
}

export default App;
