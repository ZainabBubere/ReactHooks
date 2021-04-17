import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import {UserContext, AddressContext} from '../../App'

function ComponentB() {
    // Done using useContext Hook
    const user = useContext(UserContext)
    const address = useContext(AddressContext)
    return (
        <div>
            The name is {user} and address {address}.
        </div>
    )
}

export default ComponentB
