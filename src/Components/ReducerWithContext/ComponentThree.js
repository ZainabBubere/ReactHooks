import React, {useContext} from 'react'
import {CountContext} from '../../App'

function ComponentThree() {
    const countContext = useContext(CountContext)
    return (
        <div>
           <h3>Component Three - {countContext.countState}</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button> 
        </div>
    )
}

export default ComponentThree
