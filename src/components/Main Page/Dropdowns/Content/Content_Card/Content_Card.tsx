import React from 'react'
import '../../../../../css/Content_Card.css'
import Product from '../../../../../functions/ProductFunctions'
import OneCard from './OneCard'

const Content_Card = () => {
    const {name, id, price, image} = new Product().getCard()


    return (
        <article className="content-card">

            <div className="header">Latest</div>

            <OneCard 
                name={name}
                id={id}
                price={price}
                image={image}
            />

        </article>
    )
}

export default Content_Card