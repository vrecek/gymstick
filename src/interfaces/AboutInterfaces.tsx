export type AboutMark = {
    mark: string
    num: number
}

export type DetailsText = AboutMark & {
    header: string
    text: string
}

export type DetailsType = DetailsText & AboutMark & {
    image: string
    cname?: string
}