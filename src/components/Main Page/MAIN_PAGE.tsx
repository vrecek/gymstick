import React from 'react'
import '../../css/MAIN_PAGE.css'
import LayoutWrap from '../Layout/LayoutWrap'
import Dropdowns from './Dropdowns/Dropdowns'
import Header from './Header/Header'
import Introduction from './Introduction/Introduction'
import Reviews from './Reviews/Reviews'
import Slider from './Slider/Slider'
import Tiles from './Tiles/Tiles'

const MAIN_PAGE = () => {
    return (
        <LayoutWrap>

            <main className="homepage">

                <Header />

                <Introduction />

                <Tiles />

                <Slider />

                <Reviews />

                <Dropdowns />

            </main>

        </LayoutWrap>
    )
}

export default MAIN_PAGE