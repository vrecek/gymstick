import React from 'react'
import MiscInfo from './MiscInfo'
import {TbTruckDelivery} from 'react-icons/tb'
import { MdEventAvailable, MdOutlineEventBusy } from 'react-icons/md'
import { ProductPrice } from '../../../../interfaces/ProductInterfaces'

const PriceMisc = ({price, inStock}: ProductPrice) => {
    const {cname, icon, text} = inStock > 0
        ? { cname: 'available', text: 'available', icon: <MdEventAvailable /> }
        : { cname: 'notavailable', text: 'Not available', icon: <MdOutlineEventBusy /> }


    return (
        <section className="price-misc">

            <h2>{price} <span>$</span></h2>

            <section className="misc">

                <MiscInfo text='Free delivery' icon={<TbTruckDelivery />} />
                <MiscInfo cname={cname} text={text} icon={icon} />

            </section>

        </section>
    )
}

export default PriceMisc