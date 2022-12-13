import React from 'react'
import '../../../../../css/Content_Blog.css'
import Button from '../../../../Common/Button'
import Informations from './Informations'
import Paragraphs from './Paragraphs'
import blog from '../../../../../images/blog.jpg'
import FigureImage from '../../../../Common/FigureImage'

const Content_Blog = () => {
    return (
        <article className="content-blog">

            <Informations />

            <FigureImage source={blog} altTxt='Blog' />

            <Paragraphs />

            <Button text='Read more' />

        </article>
    )
}

export default Content_Blog