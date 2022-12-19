import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { RelatedType } from '../../../../interfaces/ArticleInterfaces'
import FigureImage from '../../../Common/FigureImage'
import Category from '../../../Main Page/Dropdowns/Content/Content_Blog/Category'

const RelatedArticle = ({image, category, id, title, posted}: RelatedType) => {
    const n: NavigateFunction = useNavigate()

    return (
        <article onClick={() => n(`/article/${id}`)} className="related-article">

            <FigureImage source={image} altTxt='Article' />

            <section className="text">

                <p className="header">{title}</p>

                <p className="date">{posted}</p>

                <Category>{category}</Category>

            </section>

        </article>
    )
}

export default RelatedArticle