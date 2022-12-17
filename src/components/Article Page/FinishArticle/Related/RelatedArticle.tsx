import React from 'react'
import { RelatedType } from '../../../../interfaces/ArticleInterfaces'
import FigureImage from '../../../Common/FigureImage'
import Category from '../../../Main Page/Dropdowns/Content/Content_Blog/Category'

const RelatedArticle = ({image, category, title, posted}: RelatedType) => {
    return (
        <article className="related-article">

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