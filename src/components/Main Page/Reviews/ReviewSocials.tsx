import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import Icon from '../../Common/Icon'

const ReviewSocials = () => {
    return (
        <section className="review-socials">

            <Icon><FaFacebookSquare /></Icon>
            <Icon><FaInstagramSquare /></Icon>
            <Icon><FaGithubSquare /></Icon>

        </section>
    )
}

export default ReviewSocials