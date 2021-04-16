import React from 'react'
import {UserContext, AddressContext} from '../../App'

function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <AddressContext.Consumer>
                                {
                                    address => {
                                        return(
                                            <div>
                                                The name is {user} and address {address}.
                                            </div>
                                        )
                                    }
                                }
                            </AddressContext.Consumer>
                        )
                    }
                }
                
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
