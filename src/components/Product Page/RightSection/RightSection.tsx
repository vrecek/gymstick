import React from 'react'
import '../../../css/RightSection.css'
import { ProductPrice } from '../../../interfaces/ProductInterfaces'
import Button from '../../Common/Button'
import Quantity from './Quantity'
import TotalPrice from './TotalPrice'

const RightSection = ({inStock, price}: ProductPrice) => {
    const [quantity, setQuantity] = React.useState<number>(inStock > 0 ? 1 : 0)


    return (
        <section className="right-section">

            <Quantity inStock={inStock} set={setQuantity} quantity={quantity} />

            <TotalPrice quantity={quantity} price={price} />

            <Button text='Buy now' />

        </section>
    )
}

export default RightSection