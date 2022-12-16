import React from 'react'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { CardLiElement } from '../../../interfaces/HomepageInterfaces'
import Icon from '../../Common/Icon'

const CardLi = ({isActive, text}: CardLiElement) => {
    return (
        <li className={isActive.toString()}>

            <Icon>
                {
                    isActive
                        ? <AiOutlineCheckCircle />
                        : <AiOutlineCloseCircle />
                }
            </Icon>

            <p>{text}</p>

        </li>
    )
}

export default CardLi