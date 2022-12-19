import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Shop.css'
import Searchbar from './Searchbar'
import Product, { ProductCard } from '../../functions/ProductFunctions'
import OneCard from '../Main Page/Dropdowns/Content/Content_Card/OneCard'
import { SearchItems } from '../../interfaces/CommonInterfaces'

const SHOP_PAGE = () => {
    const shopUtil = new Product()

    const [products, setProducts] = React.useState<SearchItems<ProductCard>>({
        original: shopUtil.getAll(),
        items: shopUtil.getAll()
    }) 

    const searchProducts = (value: string) => {
        if(value.length === 0) {
            setProducts(curr => {
                curr.items = products.original
    
                return {...curr}
            })

            return
        }

        if(value.length < 3) return


        const rx: RegExp = new RegExp(value, 'i')

        const searched = products.original.filter(
            x => rx.test(x.name)
        )

        setProducts(curr => {
            curr.items = searched

            return {...curr}
        })
    }


    return (
        <LayoutWrap darkNav={true}>

            <main className="shop-page">

                <Searchbar setFunc={searchProducts}>Shop</Searchbar>

                <section className="products-section">

                    {
                        products.items.map(x => (
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

            </main>

        </LayoutWrap>
    ) 
}

export default SHOP_PAGE