import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { SearchbarOptions } from '../../interfaces/CommonInterfaces'
import Icon from '../Common/Icon'

const Searchbar = <T,>({children, setFunc}: SearchbarOptions) => {
    const searchItems = (e: React.ChangeEvent): void => {
        const input: HTMLInputElement = e.target as HTMLInputElement,
              {value} = input


        setFunc(value)
    }


    return (
        <section className="searchbar">

            <h1>{children}</h1>

            <div>

                <input onChange={searchItems} type='text' spellCheck='false' />
                <Icon><BiSearch /></Icon>

            </div>

        </section>
    )
}

export default Searchbar