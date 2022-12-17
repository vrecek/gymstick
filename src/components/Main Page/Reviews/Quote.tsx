import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { Aliases } from '../../../functions/Client'
import Icon from '../../Common/Icon'

const Quote = ({children}: Aliases.Text) => {
    return (
        <section className="text-container">

            <Icon><FaQuoteRight /></Icon>

            <p>{children}</p>

        </section>
    )
}

export default Quote