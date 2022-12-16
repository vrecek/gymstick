import React from 'react'
import { Aliases } from '../../../functions/Client'

const Description = ({children}: Aliases.Text) => {
    return (
        <section className="description">

            <p className="header">Description</p>

            <p className="text">{children}</p>

        </section>
    )
}

export default Description