import React from 'react'
import Icon from '../../../Common/Icon'
import { ProductMisc } from '../../../../interfaces/ProductInterfaces'

const MiscInfo = ({cname, icon, text}: ProductMisc) => {
    return (
        <div className={cname ?? ''}>

            <Icon>{icon}</Icon>
            {text}

        </div>
    )
}

export default MiscInfo