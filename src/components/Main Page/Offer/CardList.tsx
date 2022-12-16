import React from 'react'
import { ListBools, ListDescs } from '../../../interfaces/HomepageInterfaces'
import CardLi from './CardLi'

const CardList = ({list}: {list: ListBools}) => {
    const descList: ListDescs = [
        'Nulla rhoncus',
        'Suspendisse nisl',
        'Phasellus sem',
        'Vestibulum',
        'Scelerisque',
        'Congue lobortis'
    ]

    return (
        <ul className="list">

            {
                [...Array(6)].map((x, i) => (
                    <CardLi 
                        key={i}
                        isActive={list[i]}
                        text={descList[i]}
                    />
                ))
            }

        </ul>
    )
}

export default CardList