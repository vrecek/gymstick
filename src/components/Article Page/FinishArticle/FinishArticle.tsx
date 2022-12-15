import React from 'react'
import '../../../css/FinishArticle.css'
import Comments from './Comments/Comments'
import Miscellaneous from './Miscellaneous/Miscellaneous'
import Related from './Related/Related'

const FinishArticle = () => {
    return (
        <section className="finish-article">

            <Miscellaneous />

            <Comments />

            <Related />

        </section>
    )
}

export default FinishArticle