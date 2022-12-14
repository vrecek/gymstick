import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Blog.css'
import Searchbar from '../Shop Page/Searchbar'
import OneArticle from './OneArticle'

const BLOG_PAGE = () => {
    return (
        <LayoutWrap darkNav={true}>

            <main className="blog-page">

                <Searchbar>Blog</Searchbar>

                <section className="container">

                    <OneArticle />
                    <OneArticle />
                    <OneArticle />
                    <OneArticle />
                    <OneArticle />
                    <OneArticle />

                </section>
                
            </main>

        </LayoutWrap>
    )
}

export default BLOG_PAGE