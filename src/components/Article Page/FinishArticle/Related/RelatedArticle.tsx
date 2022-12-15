import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import Category from '../../../Main Page/Dropdowns/Content/Content_Blog/Category'
import TitleDescription from './TitleDescription'

const RelatedArticle = () => {
    return (
        <article className="related-article">

            <FigureImage source='http://localhost:3000/static/media/blog1.d786ca36230715e84705.jpg' altTxt='Article' />

            <section className="text">

                <TitleDescription />

                <p className="date">Today</p>

                <Category>Category</Category>

            </section>

        </article>
    )
}

export default RelatedArticle