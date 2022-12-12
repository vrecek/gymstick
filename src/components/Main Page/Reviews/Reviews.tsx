import React from 'react'
import '../../../css/Reviews.css'
import EntryText from './EntryText'
import OneReview from './OneReview'

const Reviews = () => {
    return (
        <section className="reviews">

            <EntryText />

            <section className="reviews-container">

                <OneReview />
                <OneReview />
                <OneReview />
                <OneReview />
                <OneReview />
                <OneReview />

            </section>

            <div className="bg one"></div>
            <div className="bg two"></div>

        </section>
    )
}

export default Reviews