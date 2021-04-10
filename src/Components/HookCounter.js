import React, {useState} from 'react'

function HookCounter() {
    const initialState = 0
    const [state, setstate] = useState(initialState)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++){
            setstate(prevstate => prevstate + 1)
        }
    }
    return (
        <div>
           Count : {state} 
           <button onClick={() => setstate(initialState)}>Reset</button>
           <button onClick={() => setstate(prevstate => prevstate + 1)}>Increment</button>
           <button onClick={() => setstate(prevstate => prevstate - 1)}>Decrement</button>
           <button onClick = {incrementFive}>Increment Five</button>
        </div>
    )
}

export default HookCounter
