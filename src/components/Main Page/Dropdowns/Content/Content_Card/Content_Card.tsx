import React from 'react'
import '../../../../../css/Content_Card.css'
import FigureImage from '../../../../Common/FigureImage'
import card from '../../../../../images/card.jpg'
import Button from '../../../../Common/Button'
import OneCard from './OneCard'

const Content_Card = () => {
    return (
        <article className="content-card">

            <div className="header">Latest</div>

            <OneCard />

        </article>
    )
}

export default Content_Card