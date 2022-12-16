import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { QuantitySection } from '../../../interfaces/ProductInterfaces'
import Icon from '../../Common/Icon'

const Quantity = ({quantity, set, inStock}: QuantitySection) => {
    const changeQuantity = (type: 'minus' | 'plus'): void => {
        const isMinus: boolean = type === 'minus'

        if(isMinus && quantity <= 1) return
        if(!isMinus && (quantity >= 10 || quantity >= inStock)) return

        set(
            curr => isMinus
                ? curr - 1
                : curr + 1
        )
    }


    return (
        <section className="quantity">

            <p className="header">Quantity</p>

            <section>

                <Icon action={() => changeQuantity('plus')}><AiOutlinePlus /></Icon>
                <div className="value">{quantity}</div>
                <Icon action={() => changeQuantity('minus')}><AiOutlineMinus /></Icon>

            </section>

        </section>
    )
}

export default Quantity