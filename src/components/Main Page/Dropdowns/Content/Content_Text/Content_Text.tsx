import React from 'react'
import '../../../../../css/Content_Text.css'
import mov from '../../../../../images/ddmv.mp4'
import { Link } from 'react-router-dom'

const Content_Text = () => {
    return (
        <article className="content-text">

            <p className="header">We provide best services in the Europe</p>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate, veritatis iure eaque omnis sequi consequuntur accusantium! Autem, animi distinctio nihil voluptas a mollitia repudiandae qui consectetur, quas error vel.</p>
            <Link to='/about'>About us</Link>

            <video muted autoPlay loop>
                <source src={mov} type='video/mp4' />
            </video>

        </article>
    )
}

export default Content_Text