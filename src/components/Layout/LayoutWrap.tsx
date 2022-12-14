import React from 'react'
import { WrapOptions } from '../../interfaces/LayoutInterfaces'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutNavigation from './Navigation/LayoutNavigation'

const LayoutWrap = ({children, darkNav}: WrapOptions) => {
    return (
        <>
        
            <LayoutNavigation darkNav={darkNav} />

            { children }

            <LayoutFooter />

        </>
    )
}

export default LayoutWrap