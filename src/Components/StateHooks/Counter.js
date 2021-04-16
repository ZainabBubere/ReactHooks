import React,{useState} from 'react'

function Counter() {

    const [state, setState] = useState(0);
    return (
        <div>
            <button onClick = {() => setState(state + 1)}>Count {state}</button>
        </div>
    )
}

export default Counter
