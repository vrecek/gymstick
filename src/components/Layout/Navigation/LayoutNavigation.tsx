import React from 'react'
import '../../../css/LayoutNavigation.css'
import { LinksList } from '../../../interfaces/CommonInterfaces'
import Links from './Links'
import Logo from './Logo'
import Menu from './Menu/Menu'
import ToggleMenu from './Menu/ToggleMenu'

const LayoutNavigation = () => {
    const list: LinksList[] = [
        { text: 'Homepage', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' }
    ]

    return (
        <nav className="layout-navigation">

            <Logo />

            <div className="right-wrap">

                <Links list={list} cname='nav-list' />
                <ToggleMenu />

            </div>

            <Menu />

        </nav>
    )
}

export default LayoutNavigation