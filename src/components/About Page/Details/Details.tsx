import React from 'react'
import { DetailsType } from '../../../interfaces/AboutInterfaces'
import FigureImage from '../../Common/FigureImage'
import ArticleText from './ArticleText'

const Details = ({image, mark, num, header, text, cname}: DetailsType) => {
    return (
        <section className={`details ${cname ?? ''}`}>

            <ArticleText mark={mark} num={num} header={header} text={text} />

            <FigureImage source={image} altTxt='Group' />

        </section>
    )
}

export default Details