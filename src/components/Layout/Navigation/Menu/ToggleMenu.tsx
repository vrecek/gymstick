import React from 'react'
import Icon from '../../../Common/Icon'
import {BiMenu} from 'react-icons/bi'

const ToggleMenu = () => {
    const toggleFunc = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement,
              menu: HTMLElement = t.parentElement!.parentElement!.children[2] as HTMLElement


        menu.classList.toggle('active')
        menu.style.translate = menu.classList.contains('active')
                                ? '0 0'
                                : '100% 0'
    }

    return (
        <Icon action={toggleFunc} cname='menu-toggler'>

            <BiMenu />

        </Icon>
    )
}

export default ToggleMenu