import React from 'react'
import { AiOutlineQuestion } from 'react-icons/ai'
import { BiStreetView, BiTimeFive } from 'react-icons/bi'
import { FaCity } from 'react-icons/fa'
import Icon from '../../../Common/Icon'

const Details = () => {
    return (
        <section className="details">

            <div>

                <Icon><FaCity /></Icon>
                <p>Berlin</p>

            </div>
            
            <div>

                <Icon><BiStreetView /></Icon>
                <p>Doloresit 24</p>

            </div>

            <div>

                <Icon><BiTimeFive /></Icon>
                <p>8AM - 10PM</p>

            </div>

        </section>
    )
}

export default Details