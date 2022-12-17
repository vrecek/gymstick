import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import blank from '../../../../images/blank.jpg'
import CommentText from './CommentText'
import { CommentType } from '../../../../interfaces/ArticleType'

const OneComment = ({text, posted, author}: CommentType) => {
    return (
        <article className="comment">

            <FigureImage source={blank} altTxt='Avatar' />

            <CommentText author={author} text={text} />

            <p className="date">{posted}</p>

        </article>
    )
}

export default OneComment