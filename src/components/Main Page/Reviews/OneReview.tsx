import React from 'react'
import { Review } from '../../../interfaces/HomepageInterfaces'
import Quote from './Quote'
import ReviewSocials from './ReviewSocials'
import UserInfo from './UserInfo'

const OneReview = ({name, avatar, text}: Review) => {
    return (
        <article className="review">

            <UserInfo name={name} avatar={avatar} />

            <Quote>{text}</Quote>

            <ReviewSocials />

        </article>
    )
}

export default OneReview