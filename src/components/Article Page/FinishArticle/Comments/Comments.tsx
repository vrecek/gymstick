import React from 'react'
import { CommentType } from '../../../../interfaces/ArticleType'
import CommentsToggler from './CommentsToggler'
import OneComment from './OneComment'

const Comments = ({comments}: {comments: CommentType[]}) => {
    return (
        <section className="comments">

            <CommentsToggler>{comments.length}</CommentsToggler>

            <section className="container">

                {
                    comments.map((x, i) => (
                        <OneComment
                            key={i}
                            posted={x.posted}
                            author={x.author}
                            avatar={x.avatar}
                            text={x.text}
                        />
                    ))
                }

            </section>

        </section>
    )
}

export default Comments