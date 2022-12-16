import React from 'react'
import { ProductInformations } from '../../../../interfaces/ProductType'

const Info = ({header, value}: ProductInformations) => {
    return (
        <div className="info">

            <p className="info">{header}: </p>
            <p className="value">{value}</p>

        </div>
    )
}

export default Info