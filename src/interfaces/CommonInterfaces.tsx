export type LinksList<T = string> = {
    text: T
    url: string
    cname?: string
}

export type Viewport = {
    forwardedRef: any
    inViewport: boolean
}