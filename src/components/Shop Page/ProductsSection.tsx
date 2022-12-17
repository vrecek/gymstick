import React from 'react'
import Product, { ProductCard } from '../../functions/ProductFunctions'
import OneCard from '../Main Page/Dropdowns/Content/Content_Card/OneCard'

const ProductsSection = () => {
    const products: ProductCard[] = new Product().getAll()


    return (
        <section className="products-section">

            {
                products.map(x => (
                    <OneCard
                        key={x.id}
                        id={x.id}
                        image={x.image}
                        price={x.price}
                        name={x.name}
                    />
                ))
            }

        </section>
    )
}

export default ProductsSection