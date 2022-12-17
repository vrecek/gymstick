import React from 'react'
import Information from './Information'
import {AiFillLike, AiFillDislike, AiFillEye} from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'
import { ArticleNumbers } from '../../../../interfaces/ArticleInterfaces'

const Miscellaneous = ({commentsNumber, likes, dislikes, views}: ArticleNumbers) => {
    return (
        <section className="misc">

            <Information icon={<AiFillLike />} value={likes} />
            <Information icon={<AiFillDislike />} value={dislikes} />

            <Information icon={<BiCommentDots />} value={commentsNumber} />

            <Information icon={<AiFillEye />} value={views} />

        </section>
    )
}

export default Miscellaneous