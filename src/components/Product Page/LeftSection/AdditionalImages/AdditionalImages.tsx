import React from 'react'
import FigureImage from '../../../Common/FigureImage'

const AdditionalImages = ({imgs}: {imgs: string[]}) => {
    const changePreviewImage = (e: React.MouseEvent, src: string): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              additionalImgs: Element[] = Array.from(t.parentElement!.children),
              image: HTMLImageElement = t.parentElement!.parentElement!.parentElement!.children[0].children[0] as HTMLImageElement


        for(let x of additionalImgs) x.className = ''
        t.className = 'active'

        image.src = src
    }


    return (
        <section className="additional-images">

            <p className="header">Additional images</p>

            <section className="container">

                {
                    imgs.map((x, i) => (
                        <FigureImage
                            action={changePreviewImage}
                            cname={i === 0 ? 'active' : ''}
                            key={i}
                            source={x}
                            altTxt='Product'
                        />
                    ))
                }

            </section>

        </section>
    )
}

export default AdditionalImages