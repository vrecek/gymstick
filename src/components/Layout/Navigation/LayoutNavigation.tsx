import React, { CSSProperties } from 'react'
import '../../../css/LayoutNavigation.css'
import { Aliases } from '../../../functions/Client'
import { LinksList } from '../../../interfaces/CommonInterfaces'
import Links from './Links'
import Logo from './Logo'
import Menu from './Menu/Menu'
import ToggleMenu from './Menu/ToggleMenu'

const LayoutNavigation = ({darkNav}: {darkNav?: boolean}) => {
    window.scrollTo(0, 0)

    
    const navRef = React.useRef<HTMLDivElement>(null)
    const list: LinksList[] = [
        { text: 'Homepage', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' }
    ]

    const darkStyle: React.CSSProperties = darkNav
        ? {background: '#303030'}
        : {}


    React.useEffect(() => {
        const t: Aliases.Possible<HTMLElement> = navRef?.current ?? null
        let scrolled: boolean = false

        if(darkNav) return

        window.onscroll = () => {
            if(!t) return
            
            if(!scrolled && window.scrollY > 400) {
                t.style.background = 'rgb(45, 45, 45)'

                scrolled = true

            }else if(scrolled && window.scrollY <= 400) {
                t.style.background = 'transparent'

                scrolled = false
            }
        }
    }, [])


    return (
        <nav style={darkStyle} ref={navRef} className="layout-navigation">

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