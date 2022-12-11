import React from 'react'
import { Aliases } from '../../functions/Client'

type IconOptions = Aliases.Text<JSX.Element> & {
    cname?: string
    action?: React.MouseEventHandler
}

const Icon = ({children, cname, action}: IconOptions) => {
    return (
        <span onClick={action} className={cname ?? ''}>

            {children}

        </span>
    )
}

export default Icon