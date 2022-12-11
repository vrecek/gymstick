import React from 'react'
import '../../../css/Introduction.css'
import ImageSection from './ImageSection/ImageSection'
import TextSection from './TextSection/TextSection'

const Introduction = () => {
    return (
        <section className="introduction">

            <TextSection />
            <ImageSection />

            <div className="bg"></div>

        </section>
    )
}

export default Introduction