import React from 'react'
import '../../../css/RightSection.css'
import Button from '../../Common/Button'
import Quantity from './Quantity'
import TotalPrice from './TotalPrice'

const RightSection = () => {
    const [quantity, setQuantity] = React.useState<number>(1)


    return (
        <section className="right-section">

            <Quantity set={setQuantity} quantity={quantity} />

            <TotalPrice />

            <Button text='Buy now' />

        </section>
    )
}

export default RightSection