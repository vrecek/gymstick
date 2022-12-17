import React from 'react'
import FigureImage from '../../Common/FigureImage'
import TagsCategory from './TagsCategory'
import Text from './Text'
import Path from './Path'
import { ArticleType } from '../../../interfaces/ArticleType'

const MainArticle = ({article}: {article: ArticleType}) => {
    const {tags, image, category, title, posted} = article

    return (
        <article className='main'>

            <Path />

            <FigureImage source={image} altTxt='Article' />

            <TagsCategory tags={tags} category={category} />

            <p className="date">{posted}</p>

            <h1>{title}</h1>

            <Text />

        </article>
    )
}

export default MainArticle