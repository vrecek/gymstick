import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Blog.css'
import Searchbar from '../Shop Page/Searchbar'
import OneArticle from './OneArticle'
import Article, { ArticlePreview } from '../../functions/ArticleFunctions'
import { SearchItems } from '../../interfaces/CommonInterfaces'

const BLOG_PAGE = () => {
    const articleUtil = new Article()

    const [articles, setArticles] = React.useState<SearchItems<ArticlePreview>>({
        original: articleUtil.getAll(),
        items: articleUtil.getAll()
    })

    const searchArticles = (value: string) => {
        if(value.length === 0) {
            setArticles(curr => {
                curr.items = articles.original
    
                return {...curr}
            })

            return
        }

        if(value.length < 3) return


        const rx: RegExp = new RegExp(value, 'i')

        const searched = articles.original.filter(
            x => rx.test(x.title) 
            || x.tags.some(
                    y => y.toLowerCase() === value.toLowerCase()
                )
        )

        setArticles(curr => {
            curr.items = searched

            return {...curr}
        })
    }


    return (
        <LayoutWrap darkNav={true}>

            <main className="blog-page">

                <Searchbar setFunc={searchArticles}>Blog</Searchbar>

                <section className="container">

                    {
                        articles.items.map(x => (
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