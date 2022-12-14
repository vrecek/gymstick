import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Shop.css'
import Searchbar from './Searchbar'
import ProductsSection from './ProductsSection'

const SHOP_PAGE = () => {
    return (
        <LayoutWrap darkNav={true}>

            <main className="shop-page">

                <Searchbar />

                <ProductsSection />

            </main>

        </LayoutWrap>
    ) 
}

export default SHOP_PAGE