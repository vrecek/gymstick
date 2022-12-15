import React from 'react'
import { AboutMark } from '../../../interfaces/AboutInterfaces'

const Mark = ({num, mark}: AboutMark) => {
    return (
        <div className="mark">

            <span>{num}</span>
            <p>{mark}</p>

        </div>
    )
}

export default Mark