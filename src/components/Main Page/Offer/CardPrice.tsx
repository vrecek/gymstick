import React from 'react'

const CardPrice = ({price}: {price: number}) => {
    return (
        <section className="pricing">

            <p className="price">${price}</p>
            <p className="per">/month</p>

        </section>
    )
}

export default CardPrice