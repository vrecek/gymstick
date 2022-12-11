import React from 'react'
import { Aliases } from '../../functions/Client'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutNavigation from './Navigation/LayoutNavigation'

const LayoutWrap = ({children}: Aliases.Text<JSX.Element>) => {
    return (
        <>
        
            <LayoutNavigation />

            { children }

            <LayoutFooter />

        </>
    )
}

export default LayoutWrap