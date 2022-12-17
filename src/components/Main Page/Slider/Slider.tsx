import React from 'react'
import SliderContainer from './SliderContainer/SliderContainer'
import TextContainer from './TextContainer/TextContainer'
import '../../../css/Slider.css'
import handleViewport from 'react-in-viewport'
import { Viewport } from '../../../interfaces/CommonInterfaces'

const Slider = ({forwardedRef, inViewport}: Viewport) => {
    React.useEffect(() => {
        forwardedRef.current.className = inViewport
            ? 'slider-section viewport'
            : 'slider-section'
    }, [inViewport])

    return (
        <section ref={forwardedRef} className="slider-section">

            <SliderContainer />

            <TextContainer />

            <div className="bg"></div>

        </section>
    )
}

export default handleViewport(Slider)