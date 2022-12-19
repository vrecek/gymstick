import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/ArticlePage.css'
import MainArticle from './MainArticle/MainArticle'
import FinishArticle from './FinishArticle/FinishArticle'
import { ArticleType } from '../../interfaces/ArticleType'
import Article from '../../functions/ArticleFunctions'
import { ArticleState, RelatedType } from '../../interfaces/ArticleInterfaces'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import Client, { LOAD } from '../../functions/Client'

const ARTICLE_PAGE = () => {
    const [article, setArticle] = React.useState<ArticleState>(null),
           {id} = useParams(),
           n: NavigateFunction = useNavigate()


    React.useEffect(() => {
        const load: LOAD.Loading = new Client.Loading()

        load
            .defaultStyleDots({
                position: 'fixed'
            })
            .append(document.body)


        setTimeout(() => {
            const articleFuncs = new Article()


            try {
                const searchedArticle: ArticleType | null = articleFuncs.getOne(id)
    
                if(!searchedArticle) {
                    n('/', { replace: true })
        
                    return
                }


                const {tags, title, category} = searchedArticle
                const related: RelatedType[] = articleFuncs.getRelated(tags, category, title, id!)


                setArticle({
                    main: searchedArticle,
                    related
                })

            }finally {
                load.remove()
            }         
        }, 500);

    }, [])


    if(article) {
        const {comments, likes, dislikes, views} = article.main

        return (
            <LayoutWrap darkNav={true}>
    
                <main className="article-page">
    
                    <MainArticle article={article.main} />
    
                    <FinishArticle related={article.related} comments={comments} views={views} likes={likes} dislikes={dislikes} />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}

export default ARTICLE_PAGE