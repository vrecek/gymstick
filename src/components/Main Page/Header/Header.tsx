import React from 'react'
import Button from '../../Common/Button'
import '../../../css/Header.css'

const Header = () => {
    return (
        <header className="homepage-header">

            <h1>Do you want to get fit?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam quae nulla dolorum accusamus.</p>
            <Button text='Check our offer' />

        </header>
    )
}

export default Header