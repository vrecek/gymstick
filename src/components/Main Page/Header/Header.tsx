import React from 'react'
import Button from '../../Common/Button'
import '../../../css/Header.css'
import {scroller} from 'react-scroll'
import { scrollOptions } from '../../../functions/scrollOptions'

const Header = () => {
    return (
        <header className="homepage-header">

            <h1>Do you want to get fit?</h1>
            <p>Explore our website, where we offer various services, products and news articles. You will definitely find something for yourself</p>
            <Button action={() => scroller.scrollTo('offer', scrollOptions)} text='Check our offer' />

        </header>
    )
}

export default Header