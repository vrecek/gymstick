import React from 'react'
import { BlogInfo } from '../../../../../interfaces/HomepageInterfaces'
import Category from './Category'
import Tags from './Tags'

const Informations = ({tags, category}: BlogInfo) => {
    return (
        <section className="informations">

            <Tags tags={tags} />
            <Category>{category}</Category>

        </section>
    )
}

export default Informations