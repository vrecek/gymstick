import React from 'react'
import { Aliases } from '../../../../../functions/Client'

const Category = ({children}: Aliases.Text) => {
    return (
        <p className="category">
            # {children}
        </p>
    )
}

export default Category