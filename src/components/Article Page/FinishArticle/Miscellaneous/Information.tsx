import React from 'react'
import { MiscInfo } from '../../../../interfaces/ArticleInterfaces'
import Icon from '../../../Common/Icon'

const Information = ({icon, value}: MiscInfo) => {
    return (
        <div className="info">

            <Icon>{icon}</Icon>

            <p>{value}</p>

        </div>
    )
}

export default Information