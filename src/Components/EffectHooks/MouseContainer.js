
import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(0)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {
                display && <HookMouse></HookMouse>
            }
        </div>
    )
}

export default MouseContainer
