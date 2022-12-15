import React from 'react'
import MiscInfo from './MiscInfo'
import {TbTruckDelivery} from 'react-icons/tb'
import { MdEventAvailable } from 'react-icons/md'

const PriceMisc = () => {
    return (
        <section className="price-misc">

            <h2>999 <span>$</span></h2>

            <section className="misc">

                <MiscInfo text='Free delivery' icon={<TbTruckDelivery />} />
                <MiscInfo cname='available' text='Available' icon={<MdEventAvailable />} />

            </section>

        </section>
    )
}

export default PriceMisc