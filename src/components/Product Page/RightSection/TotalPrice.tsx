import React from 'react'
import { RightTotal } from '../../../interfaces/ProductInterfaces'

const TotalPrice = ({price, quantity}: RightTotal) => {
    return (
        <section className="total">

            <p className="header">Total</p>

            <h3>{(price * quantity).toFixed(2)} $</h3>

        </section>
    )
}

export default TotalPrice