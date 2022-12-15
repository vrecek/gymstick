import React from 'react'
import { DetailsText } from '../../../interfaces/AboutInterfaces'
import Mark from './Mark'

const ArticleText = ({header, text, mark, num}: DetailsText) => {
    return (
        <article className="text-article">

            <Mark num={num} mark={mark} />

            <p className="header">{header}</p>
            <p className="text">{text}</p>

        </article>
    )
}

export default ArticleText