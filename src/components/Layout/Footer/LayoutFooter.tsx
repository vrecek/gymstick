import React from 'react'
import '../../../css/LayoutFooter.css'
import FooterLinks from './FooterLinks'
import FooterSocials from './FooterSocials'
import LogoSection from './LogoSection'

const LayoutFooter = () => {
    return (
        <footer className="layout-footer">

            <section className="wrap">

                <LogoSection />
                <FooterLinks />
                <FooterSocials />

            </section>

            <p className="rights">&copy; All rights reserved &copy;</p>

        </footer>
    )
}

export default LayoutFooter