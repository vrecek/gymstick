import React from 'react'
import FigureImage from '../../../../Common/FigureImage'
import { Link } from 'react-router-dom'
import { ProductCard } from '../../../../../functions/ProductFunctions'

const OneCard = ({id, name, price, image}: ProductCard) => {
    return (
        <div className="card">

            <FigureImage source={image} />

            <p className="name">{name}</p>
            <p className="price">{price} <span>$</span></p>
            <Link to={`/product/${id}`}>View</Link>

        </div>
    )
}

export default OneCard