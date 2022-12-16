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
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, accusantium illo, vero laudantium, quo asperiores sapiente rem deserunt', 
            btnText: 'Explore', btnFunc: () => scroller.scrollTo('offer', scrollOptions) 
        },

        { 
            icon: <AiOutlineQuestionCircle />, 
            header: 'Contact', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, accusantium illo, vero laudantium, quo asperiores sapiente rem deserunt', 
            btnText: 'Explore', btnFunc: () => n('/contact') 
        },

        { 
            icon: <FaMoneyBillAlt />, 
            header: 'Products', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, accusantium illo, vero laudantium, quo asperiores sapiente rem deserunt', 
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