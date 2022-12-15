import React from 'react'
import FigureImage from '../../Common/FigureImage'
import header from '../../../images/aboutheader.jpg'
import ArrowIcons from './ArrowIcons'
import '../../../css/AboutHeader.css'

const AboutHeader = () => {
    return (
        <header className="about-header">

            <FigureImage source={header} altTxt='Header' />

            <article>

                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eius ducimus.</p>
                <ArrowIcons />

            </article>

        </header>
    )
}

export default AboutHeader