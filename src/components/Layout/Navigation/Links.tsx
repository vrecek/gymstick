import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { NavigationList } from '../../../interfaces/LayoutInterfaces'

const Links = ({list, cname}: NavigationList) => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <ul className={`links ${cname ?? ''}`}>

            {
                list.map((x, i) => (
                    <li className={x.cname ?? ''} onClick={() => n(x.url)} key={i}>
                        {x.text} 
                    </li>
                ))
            }

        </ul>
    )
}

export default Links