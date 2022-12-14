import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Icon from '../Common/Icon'

const Searchbar = () => {
    return (
        <section className="searchbar">

            <h1>Shop</h1>

            <div>

                <input type='text' spellCheck='false' />
                <Icon><BiSearch /></Icon>

            </div>

        </section>
    )
}

export default Searchbar