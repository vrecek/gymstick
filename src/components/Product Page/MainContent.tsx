import React from 'react'
import { ProductItem } from '../../interfaces/ProductInterfaces'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'

const MainContent = ({product}: ProductItem) => {
    return (
        <section className="main-content">

            <LeftSection product={product} />
            <RightSection price={product.price} inStock={product.inStock} />

        </section>
    )
}

export default MainContent