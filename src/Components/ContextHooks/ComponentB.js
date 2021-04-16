import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import {UserContext, AddressContext} from '../../App'

function ComponentB() {

    const user = useContext(UserContext)
    const address = useContext(AddressContext)
    return (
        <div>
            The name is {user} and address {address}.
        </div>
    )
}

export default ComponentB
