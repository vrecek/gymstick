import React from 'react'
import '../../../css/Reviews.css'
import { Review } from '../../../interfaces/HomepageInterfaces'
import EntryText from './EntryText'
import OneReview from './OneReview'
import rev1 from '../../../images/reviews/rev1.jpg'
import rev2 from '../../../images/reviews/rev2.jpg'
import rev3 from '../../../images/reviews/rev3.jpg'
import rev4 from '../../../images/reviews/rev4.jpg'
import rev5 from '../../../images/reviews/rev5.jpg'
import rev6 from '../../../images/reviews/rev6.jpg'

const Reviews = () => {
    const reviews: Review[] = [
        {
            name: 'Keenan Cannon', 
            text: 'Regularly produces creative, original ideas, plans, products or methods, well-attuned to the needs and capabilities of the organization, and producing clear benefits. Pays great attention to detail',
            avatar: rev1
        },

        {
            name: 'Kamran Hunter',
            text: 'Responds to setbacks or adversity with redoubled vigour and enthusiasm. Will never accept that defeat is a foregone conclusion, and inspires others to stay positive and fight on. Always eager to take on a new task, whether hard or simple.',
            avatar: rev2
        },

        {
            name: 'Esther Neal',
            text: 'A self-starter - someone who always finds out the right thing to do and gets on with the job. If a manager has given no guidance, I will still take appropriate action. If the required tools are unavailable, I am able to improvise.',
            avatar: rev3
        },

        {
            name: 'Stephen Acevedo',
            text: 'Physically fit, very rarely sick, and able to meet the demands of a physically demanding job. Intellectually versatile. When a topic is unfamiliar or new concepts are put forward, I am learning and adjusting quickly, and I am soon making a full and useful contribution to the conversation.',
            avatar: rev4
        },

        {
            name: 'Ronan Leblanc',
            text: 'Considers problems as a challenge and enjoys finding creative yet appropriate solutions. It is able to work out his own solutions, but also works well with a group to solve problems. Communicates plans clearly to others.',
            avatar: rev5
        },

        {
            name: 'Jamal Walters',
            text: 'A pleasant, outgoing personality who always gets on well with others. Prioritizes and sequences own tasks and those of other people in the team. Makes sure that the priority tasks are always completed on time.',
            avatar: rev6
        }
    ]

    return (
        <section className="reviews">

            <EntryText />

            <section className="reviews-container">

                {
                    reviews.map((x, i) => (
                        <OneReview
                            key={i}
                            avatar={x.avatar}
                            name={x.name}
                            text={x.text}
                        />
                    ))
                }

            </section>

            <div className="bg one"></div>
            <div className="bg two"></div>

        </section>
    )
}

export default Reviews