import React from 'react'
import FigureImage from '../../Common/FigureImage'
import img from '../../../images/aboutman.jpg'
import TextArticle from './TextArticle'

const AboutText = () => {
    return (
        <section className="about-text">

            <section className="container">

                <TextArticle />

                <FigureImage source={img} altTxt='Man' />

            </section>

        </section>
    )
}

export default AboutText