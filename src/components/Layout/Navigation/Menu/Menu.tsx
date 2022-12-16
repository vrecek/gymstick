import React from 'react'
import '../../../../css/Menu.css'
import { LinksList } from '../../../../interfaces/CommonInterfaces'
import Links from '../Links'
import Socials from './Socials'
import ToggleMenu from './ToggleMenu'

const Menu = () => {
    const list: LinksList<string>[] = [
        { text: 'Homepage', url: '/', cname: 'home' },
        { text: 'Offer', url: '/offer' },
        { text: 'Blog', url: '/blog' },
        { text: 'Shop', url: '/shop' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' }
    ]

    
    return (
        <aside className='layout-menu'>

            <ToggleMenu />

            <Links list={list} cname='aside-list' />

            <Socials />

        </aside>
    )
}

export default Menu