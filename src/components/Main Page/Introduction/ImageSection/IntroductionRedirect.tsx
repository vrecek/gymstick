import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Icon from '../../../Common/Icon'

const IntroductionRedirect = () => {
    const n: NavigateFunction = useNavigate()

    
    return (
        <section onClick={() => n('/blog')} className="redirect">

            <p>Explore our blog</p>

            <Icon><BsArrowRight /></Icon>

        </section>
    )
}

export default IntroductionRedirect