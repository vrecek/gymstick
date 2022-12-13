import React from 'react'
import '../../../../../css/Content_Card.css'
import FigureImage from '../../../../Common/FigureImage'
import card from '../../../../../images/card.jpg'
import Button from '../../../../Common/Button'

const Content_Card = () => {
    return (
        <article className="content-card">

            <div className="header">Latest</div>

            <div className="card">

                <FigureImage source={card} />

                <p className="name">Conqesatur elit</p>
                <p className="price">999 <span>$</span></p>
                <Button text='View' />

            </div>

        </article>
    )
}

export default Content_Card