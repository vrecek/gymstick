import React from 'react'
import FigureImage from '../../Common/FigureImage'
import logoImage from '../../../images/logo.png'

const Logo = () => {
    return (
        <section className="logo">

            <FigureImage source={logoImage} />
            <p className="logo">Gymstick</p>

        </section>
    )
}

export default Logo