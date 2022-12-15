import React from 'react'
import FigureImage from '../../../Common/FigureImage'

const AdditionalImages = () => {
    return (
        <section className="additional-images">

            <p className="header">Additional images</p>

            <section className="container">

                <FigureImage source='http://localhost:3000/static/media/card.05169fcecf387b7b3d43.jpg' altTxt='Additional' />
                <FigureImage source='http://localhost:3000/static/media/card.05169fcecf387b7b3d43.jpg' altTxt='Additional' />
                <FigureImage source='http://localhost:3000/static/media/card.05169fcecf387b7b3d43.jpg' altTxt='Additional' />

            </section>

        </section>
    )
}

export default AdditionalImages