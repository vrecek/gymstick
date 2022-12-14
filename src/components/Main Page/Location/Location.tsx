import React from 'react'
import '../../../css/Location.css'
import LeftSection from './LeftSection/LeftSection'

const Location = () => {
    return (
        <section className="location">

            <LeftSection />

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.6721060562045!2d13.410260516159768!3d52.50317477981106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e2df22c1655%3A0x57505771a33e43df!2sOranienstra%C3%9Fe%2C%20Berlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1671019638025!5m2!1spl!2spl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </section>
    )
}

export default Location