import React from "react"
import { ArticlePreview } from "../functions/ArticleFunctions"
import { Aliases } from "../functions/Client"

export type LinksList<T = string> = {
    text: T
    url: string
    cname?: string
}

export type Viewport = {
    forwardedRef: any
    inViewport: boolean
}

export type SearchItems<T> = {
    original: T[]
    items: T[]
}

export type SearchbarOptions = Aliases.Text & {
    setFunc: (value: string) => void
}