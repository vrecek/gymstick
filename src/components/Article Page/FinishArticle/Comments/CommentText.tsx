import React from 'react'
import { CommentTextDetails } from '../../../../interfaces/ArticleType'

const CommentText = ({text, author}: CommentTextDetails) => {
    return (
        <section className="text">

            <p className="author">{author}</p>
            <p className="text">{text}</p>

        </section>
    )
}

export default CommentText