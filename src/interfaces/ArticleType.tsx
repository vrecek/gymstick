export type ArticleType = {
    image: string
    tags: string[]
    category: string
    title: string
    text: string
    likes: number
    dislikes: number
    views: number
    comments: CommentType[]
    posted: string
    id: string
}

export type CommentType = CommentTextDetails & {
    avatar: string
    posted: string
}

export type CommentTextDetails = {
    author: string
    text: string
}