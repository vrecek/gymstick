import React from 'react'
import '../../../../../css/Content_Blog.css'
import Informations from './Informations'
import Paragraphs from './Paragraphs'
import FigureImage from '../../../../Common/FigureImage'
import Article from '../../../../../functions/ArticleFunctions'
import { Link } from 'react-router-dom'

const Content_Blog = () => {
    const {image, shortPara, tags, id, category, title} = new Article().getCard()


    return (
        <article className="content-blog">

            <Informations tags={tags} category={category} />

            <FigureImage source={image} altTxt='Blog' />

            <Paragraphs title={title} text={shortPara} />

            <Link to={`/article/${id}`}>Read more</Link>

        </article>
    )
}

export default Content_Blog