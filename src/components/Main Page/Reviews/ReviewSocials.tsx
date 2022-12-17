import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import Icon from '../../Common/Icon'

const ReviewSocials = () => {
    return (
        <section className="review-socials">

            <Icon action={() => window.open('https://github.com/vrecek', '_blank')}><FaFacebookSquare /></Icon>
            <Icon action={() => window.open('https://github.com/vrecek', '_blank')}><FaInstagramSquare /></Icon>
            <Icon action={() => window.open('https://github.com/vrecek', '_blank')}><FaGithubSquare /></Icon>

        </section>
    )
}

export default ReviewSocials