import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import blank from '../../../../images/blank.jpg'
import CommentText from './CommentText'

const OneComment = () => {
    return (
        <article className="comment">

            <FigureImage source={blank} altTxt='Avatar' />

            <CommentText />

            <p className="date">Today</p>

        </article>
    )
}

export default OneComment