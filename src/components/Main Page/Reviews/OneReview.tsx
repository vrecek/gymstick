import React from 'react'
import Quote from './Quote'
import ReviewSocials from './ReviewSocials'
import UserInfo from './UserInfo'

const OneReview = () => {
    return (
        <article className="review">

            <UserInfo />

            <Quote />

            <ReviewSocials />

        </article>
    )
}

export default OneReview