import React from 'react'
import '../../../css/Offer.css'
import { CardOptions, CardType } from '../../../interfaces/HomepageInterfaces'
import Card from './Card'
import OfferText from './OfferText'

const Offer = () => {
    const cards: CardOptions[] = [
        {
            type: CardType.BEGINNER,
            desc: 'Are you starting and you do not know where to begin? If yes, this offer is perfect.',
            list: [true, true, false, false, false, false],
            price: 10.
        },

        {
            type: CardType.POPULAR,
            desc: 'Good offer for those, who have got any experience and need good training program.',
            list: [true, true, true, true, false, false],
            price: 25
        },

        {
            type: CardType.ADVANCED,
            desc: 'Perfect, if you want to do your best and if you are not afraid of hard exercises.',
            list: [true, true, true, true, true, true],
            price: 40
        }
    ]


    return (
        <section className="offer">

            <OfferText />

            <section className="container">

                {
                    cards.map((x, i) => (
                        <Card
                            key={i}
                            desc={x.desc}
                            list={x.list}
                            price={x.price}
                            type={x.type}
                        />
                    ))
                }

            </section>

            <div className="bg"></div>

        </section>
    )
}

export default Offer