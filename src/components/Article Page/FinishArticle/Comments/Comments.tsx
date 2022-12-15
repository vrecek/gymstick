import React from 'react'
import CommentsToggler from './CommentsToggler'
import OneComment from './OneComment'

const Comments = () => {
    return (
        <section className="comments">

            <CommentsToggler />

            <section className="container">

                <OneComment />
                <OneComment />
                <OneComment />
                <OneComment />
                <OneComment />
                <OneComment />

            </section>

        </section>
    )
}

export default Comments