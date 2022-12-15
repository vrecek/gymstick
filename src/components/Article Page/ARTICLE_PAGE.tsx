import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/ArticlePage.css'
import MainArticle from './MainArticle/MainArticle'
import FinishArticle from './FinishArticle/FinishArticle'

const ARTICLE_PAGE = () => {
    return (
        <LayoutWrap darkNav={true}>

            <main className="article-page">

                <MainArticle />

                <FinishArticle />

            </main>

        </LayoutWrap>
    )
}

export default ARTICLE_PAGE