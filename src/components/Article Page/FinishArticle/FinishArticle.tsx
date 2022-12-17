import React from 'react'
import '../../../css/FinishArticle.css'
import { ArticleMisc } from '../../../interfaces/ArticleInterfaces'
import Comments from './Comments/Comments'
import Miscellaneous from './Miscellaneous/Miscellaneous'
import Related from './Related/Related'

const FinishArticle = ({likes, dislikes, comments, views, related}: ArticleMisc) => {
    return (
        <section className="finish-article">

            <Miscellaneous related={related} views={views} commentsNumber={comments.length} dislikes={dislikes} likes={likes} />

            <Comments comments={comments} />

            <Related related={related} />

        </section>
    )
}

export default FinishArticle