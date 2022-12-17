import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Blog.css'
import Searchbar from '../Shop Page/Searchbar'
import OneArticle from './OneArticle'
import Article, { ArticlePreview } from '../../functions/ArticleFunctions'

const BLOG_PAGE = () => {
    const articles: ArticlePreview[] = new Article().getAll()


    return (
        <LayoutWrap darkNav={true}>

            <main className="blog-page">

                <Searchbar>Blog</Searchbar>

                <section className="container">

                    {
                        articles.map(x => (
                            <OneArticle
                                key={x.id}
                                category={x.category}
                                title={x.title}
                                id={x.id}
                                image={x.image}
                                tags={x.tags}
                                shortPara={x.shortPara}
                            />
                        ))
                    }

                </section>
                
            </main>

        </LayoutWrap>
    )
}

export default BLOG_PAGE