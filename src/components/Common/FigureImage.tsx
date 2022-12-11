import React from 'react'

type ImageOptions = {
    source: string
    altTxt?: string
    cname?: string
} 

const FigureImage = ({cname, source, altTxt}: ImageOptions) => {
    return (
        <figure className={cname ?? ''}>

            <img src={source} alt={altTxt ?? 'Image'} loading='lazy' />

        </figure>
    )
}

export default FigureImage