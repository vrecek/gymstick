import React from 'react'
import FigureImage from '../../Common/FigureImage'
import '../../../css/LeftSection.css'
import Description from './Description'
import PriceMisc from './PriceMisc/PriceMisc'
import AdditionalImages from './AdditionalImages/AdditionalImages'
import ProductInfo from './ProductInfo/ProductInfo'

const LeftSection = () => {
    return (
        <section className="left-section">

            <FigureImage cname='main' source='http://localhost:3000/static/media/card.05169fcecf387b7b3d43.jpg' altTxt='Product' />

            <h1>Aliquam explicabo iste corporis.</h1>
            
            <PriceMisc />

            <Description />

            <AdditionalImages />

            <ProductInfo />

        </section>
    )
}

export default LeftSection