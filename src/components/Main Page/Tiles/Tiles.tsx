import React from 'react'
import { TileDetails } from '../../../interfaces/HomepageInterfaces'
import OneTile from './OneTile'
import {GiWeightLiftingUp} from 'react-icons/gi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { FaMoneyBillAlt } from 'react-icons/fa'
import '../../../css/Tiles.css'
import TextHeaderWrap from './TextHeaderWrap'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import {scroller} from 'react-scroll'
import { scrollOptions } from '../../../functions/scrollOptions'

const Tiles = () => {
    const n: NavigateFunction = useNavigate()

    const tiles: TileDetails[] = [
        { 
            icon: <GiWeightLiftingUp />, 
            header: 'Gym pass', 
            text: 'Praesent tempor ullamcorper massa, in luctus mi pretium at. Curabitur a tellus a nunc efficitur scelerisque at a ante', 
            btnText: 'Explore', btnFunc: () => scroller.scrollTo('offer', scrollOptions) 
        },

        { 
            icon: <AiOutlineQuestionCircle />, 
            header: 'Contact', 
            text: 'Nulla sem libero, hendrerit sit amet metus porttitor, condimentum convallis quam. Quisque lacinia egestas laoreet', 
            btnText: 'Explore', btnFunc: () => n('/contact') 
        },

        { 
            icon: <FaMoneyBillAlt />, 
            header: 'Products', 
            text: 'Cras dictum vitae urna id iaculis. Nunc porttitor ante ac massa placerat volutpat. Praesent viverra metus vel arcu gravida', 
            btnText: 'Explore', btnFunc: () => n('/shop')  
        }
    ]


    return (
        <section className="tiles">

            <TextHeaderWrap />

            <section className="container">

                {
                    tiles.map((x, i) => (
                        <OneTile
                            key={i}
                            icon={x.icon}
                            header={x.header}
                            text={x.text}
                            btnText={x.btnText}
                            btnFunc={x.btnFunc}
                        />
                    ))
                }

            </section>

        </section>
    )
}

export default Tiles