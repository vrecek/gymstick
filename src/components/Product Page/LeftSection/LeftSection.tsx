import React from 'react'
import FigureImage from '../../Common/FigureImage'
import '../../../css/LeftSection.css'
import Description from './Description'
import PriceMisc from './PriceMisc/PriceMisc'
import AdditionalImages from './AdditionalImages/AdditionalImages'
import ProductInfo from './ProductInfo/ProductInfo'
import { ProductItem } from '../../../interfaces/ProductInterfaces'

const LeftSection = ({product}: ProductItem) => {
    const {image, name, price, description, informations, inStock, additionalImgs} = product

    return (
        <section className="left-section">

            <FigureImage cname='main' source={image} altTxt='Product' />

            <h1>{name}</h1>
            
            <PriceMisc price={price} inStock={inStock} />

            <Description>{description}</Description>

            <AdditionalImages imgs={[image, ...additionalImgs]} />

            <ProductInfo informations={informations} />

        </section>
    )
}

export default LeftSection