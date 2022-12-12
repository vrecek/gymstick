import React from 'react'
import SliderContainer from './SliderContainer/SliderContainer'
import TextContainer from './TextContainer/TextContainer'
import '../../../css/Slider.css'

const Slider = () => {
    return (
        <section className="slider-section">

            <SliderContainer />

            <TextContainer />

            <div className="bg"></div>

        </section>
    )
}

export default Slider