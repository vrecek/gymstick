import React from 'react'
import { BlogText } from '../../../../../interfaces/HomepageInterfaces'

const Paragraphs = ({title, text}: BlogText) => {
    return (
        <section className="paragraphs">

            <p className="title">{title}</p>

            <p className="text">{text}</p>

        </section>
    )
}

export default Paragraphs