import React from 'react'
import Location from '../Main Page/Location/Location'
import '../../css/Contact.css'
import ContactForm from './Form/ContactForm'
import LayoutWrap from '../Layout/LayoutWrap'
import ContactSocials from './ContactSocials'

const CONTACT_PAGE = () => {
    return (
        <LayoutWrap darkNav={true}>

            <main className="contact-page">

                <h1>Contact us</h1>

                <ContactSocials />

                <ContactForm />

                <Location />

            </main>

        </LayoutWrap>
    )
}

export default CONTACT_PAGE