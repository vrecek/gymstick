import React from 'react'
import Button from '../../../../Common/Button'
import FigureImage from '../../../../Common/FigureImage'
import card from '../../../../../images/card.jpg'

const OneCard = () => {
    return (
        <div className="card">

            <FigureImage source={card} />

            <p className="name">Conqesatur elit</p>
            <p className="price">999 <span>$</span></p>
            <Button text='View' />

        </div>
    )
}

export default OneCard