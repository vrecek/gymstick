import React from 'react'
import { TileDetails } from '../../../interfaces/HomepageInterfaces'
import Button from '../../Common/Button'
import Icon from '../../Common/Icon'

const OneTile = ({btnFunc, btnText, text, header, icon}: TileDetails) => {
    return (
        <article className="tile">

            <div className="wrap">
                
                <Icon>{icon}</Icon>

                <p className="header">{header}</p>

                <p className="text">{text}</p>

                <Button action={btnFunc} text={btnText} />

            </div>

        </article>
    )
}

export default OneTile