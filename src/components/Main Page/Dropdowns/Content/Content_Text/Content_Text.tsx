import React from 'react'
import '../../../../../css/Content_Text.css'
import Button from '../../../../Common/Button'
import mov from '../../../../../images/ddmv.mp4'

const Content_Text = () => {
    return (
        <article className="content-text">

            <p className="header">Lorem ipsum dolor sitamet elit</p>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate, veritatis iure eaque omnis sequi consequuntur accusantium! Autem, animi distinctio nihil voluptas a mollitia repudiandae qui consectetur, quas error vel.</p>
            <Button text='Conqestuer' />

            <video muted autoPlay loop>
                <source src={mov} type='video/mp4' />
            </video>

        </article>
    )
}

export default Content_Text