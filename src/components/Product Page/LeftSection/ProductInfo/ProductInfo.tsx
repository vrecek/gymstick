import React from 'react'
import Info from './Info'
import { ProductInformations } from '../../../../interfaces/ProductType'

const ProductInfo = ({informations}: {informations: ProductInformations[]}) => {
    return (
        <section className="product-info">

            <p className="header">Product informations</p>

            <section className="container">

                {
                    informations.map((x, i) => (
                        <Info
                            key={i}
                            header={x.header}
                            value={x.value}
                        />
                    ))
                }

            </section>

        </section>
    )
}

export default ProductInfo