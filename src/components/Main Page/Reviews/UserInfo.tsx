import React from 'react'
import { UserReview } from '../../../interfaces/HomepageInterfaces'
import FigureImage from '../../Common/FigureImage'

const UserInfo = ({avatar, name}: UserReview) => {
    return (
        <section className="user">

            <FigureImage source={avatar} altTxt='Avatar' />
            <p>{name}</p>

        </section>
    )
}

export default UserInfo