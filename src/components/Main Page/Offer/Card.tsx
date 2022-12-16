import React from 'react'
import { CardOptions } from '../../../interfaces/HomepageInterfaces'
import Button from '../../Common/Button'
import CardList from './CardList'
import CardPrice from './CardPrice'

const Card = ({desc, type, price, list}: CardOptions) => {
    const [text, cname] = type.split(',')

    return (
        <article className="card">

            <p className={`type ${cname}`}>{text}</p>

            <CardPrice price={price} />

            <p className="desc">{desc}</p>

            <CardList list={list} />

            <Button text='Buy' />

        </article>
    )
}

export default Card