import { ArticlePreview } from "../functions/ArticleFunctions"
import { ArticleType, CommentType } from "./ArticleType"

export type MiscInfo = {
    icon: JSX.Element
    value: string | number
}

// export interface RelatedType extends Omit<ArticlePreview, 'tags'> {}
export type RelatedType = {
    image: string
    posted: string
    category: string
    title: string
    id: string
}

export type ArticleState = {
    main: ArticleType
    related: RelatedType[]
} | null

export type ArticleStats = {
    comments: CommentType[]
    views: number
}

export type ArticleRate = {
    likes: number
    dislikes: number
}

export type ArticleMisc = ArticleStats & ArticleRate & {
    related: RelatedType[]
}

export interface ArticleNumbers extends Omit<ArticleMisc, 'comments'> {
    commentsNumber: number
}

export type RelatedDescription = {
    title: string
    shortPara: string
}