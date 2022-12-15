import React from 'react'
import FigureImage from '../../Common/FigureImage'
import img from '../../../images/blog/blog1.jpg'
import TagsCategory from './TagsCategory'
import Text from './Text'
import Path from './Path'

const MainArticle = () => {
    return (
        <article className='main'>

            <Path />

            <FigureImage source={img} altTxt='Article' />

            <TagsCategory />

            <h1>Lorem ipsum dolor sitamet coqnestur</h1>

            <Text />

        </article>
    )
}

export default MainArticle