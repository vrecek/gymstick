import React from 'react'
import { TileDetails } from '../../../interfaces/HomepageInterfaces'
import OneTile from './OneTile'
import {GiWeightLiftingUp} from 'react-icons/gi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { FaMoneyBillAlt } from 'react-icons/fa'
import '../../../css/Tiles.css'

const Tiles = () => {
    const tiles: TileDetails[] = [
        { 
            icon: <GiWeightLiftingUp />, 
            header: 'Lorem ipsum', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, accusantium illo, vero laudantium, quo asperiores sapiente rem deserunt', 
            btnText: 'Explore', btnFunc: ()=>{} 
        },

        { 
            icon: <AiOutlineQuestionCircle />, 
            header: 'Lorem ipsum', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, accusantium illo, vero laudantium, quo asperiores sapiente rem deserunt', 
            btnText: 'Explore', btnFunc: ()=>{} 
        },

        { 
            icon: <FaMoneyBillAlt />, 
            header: 'Lorem ipsum', 
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, accusantium illo, vero laudantium, quo asperiores sapiente rem deserunt', 
            btnText: 'Explore', btnFunc: ()=>{} 
        }
    ]


    return (
        <section className="tiles">

            <p className="section-header">Why you should consider us</p>

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