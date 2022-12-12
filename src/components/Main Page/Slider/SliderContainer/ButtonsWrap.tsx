import React from 'react'
import { SliderButtonsOptions } from '../../../../interfaces/HomepageInterfaces'
import SliderButtons from './SliderButtons'

const ButtonsWrap = ({children, interval, setTime}: SliderButtonsOptions) => {
    return (
        <section className="slider-container">

            {children}

            <SliderButtons setTime={setTime} interval={interval} />

        </section>
    )
}

export default ButtonsWrap