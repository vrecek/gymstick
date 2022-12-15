import React from 'react'
import '../../css/ProductPage.css'
import LayoutWrap from '../Layout/LayoutWrap'
import MainContent from './MainContent'

const PRODUCT_PAGE = () => {
    return (
        <LayoutWrap darkNav={true}>

            <main className="product-page">

                <MainContent />

            </main>

        </LayoutWrap>
    )
}

export default PRODUCT_PAGE