import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Aliases } from '../../functions/Client'
import Icon from '../Common/Icon'

const Searchbar = ({children}: Aliases.Text) => {
    return (
        <section className="searchbar">

            <h1>{children}</h1>

            <div>

                <input type='text' spellCheck='false' />
                <Icon><BiSearch /></Icon>

            </div>

        </section>
    )
}

export default Searchbar