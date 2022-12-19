import React from 'react'
import FigureImage from '../Common/FigureImage'
import Tags from '../Main Page/Dropdowns/Content/Content_Blog/Tags'
import Category from '../Main Page/Dropdowns/Content/Content_Blog/Category'
import { ArticlePreview } from '../../functions/ArticleFunctions'
import { Link } from 'react-router-dom'

const OneArticle = ({title, shortPara, category, image, tags, id}: ArticlePreview) => {
    return (
        <article className="one-article">

            <FigureImage source={image} altTxt='Article' />

            <div className='wrap'>

                <Tags tags={tags} />
                <p className="header">{title}</p>
                <p className="text">{shortPara}</p>
                <Link to={`/article/${id}`}>Read more</Link>

                <Category>{category}</Category>

            </div>

        </article>
    )
}

export default OneArticle