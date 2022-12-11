import React from 'react'
import '../../css/MAIN_PAGE.css'
import LayoutWrap from '../Layout/LayoutWrap'
import Header from './Header/Header'
import Tiles from './Tiles/Tiles'

const MAIN_PAGE = () => {
    return (
        <LayoutWrap>

            <main className="homepage">

                <Header />

                <Tiles />

            </main>

        </LayoutWrap>
    )
}

export default MAIN_PAGE