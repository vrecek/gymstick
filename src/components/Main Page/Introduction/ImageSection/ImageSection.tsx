import React from 'react'
import FigureImage from '../../../Common/FigureImage'
import introImage from '../../../../images/introduction.png'
import IntroductionRedirect from './IntroductionRedirect'

const ImageSection = () => {
    return (
        <section className="image-section">

            <IntroductionRedirect />

            <FigureImage source={introImage} altTxt="Man" />

        </section>
    )
}

export default ImageSection