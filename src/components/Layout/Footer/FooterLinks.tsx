import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import {LinksList} from '../../../interfaces/CommonInterfaces'

const FooterLinks = () => {
    const n: NavigateFunction = useNavigate()
    const links: LinksList[][] = [
        [
            { text: 'Links', url: '/', cname: 'header' },
            { text: 'Dolorem', url: '/' },
            { text: 'Dolorem', url: '/' },
            { text: 'Dolorem', url: '/' },
            { text: 'Dolorem', url: '/' }
        ],

        [
            { text: 'Dolorem', url: '/', cname: 'margin' },
            { text: 'Dolorem', url: '/' },
            { text: 'Dolorem', url: '/' }
        ]
    ]


    return (
        <section className="links">

            {
                links.map((x, i) => (
                    <ul key={i}>

                        {
                            x.map((y, j) => (
                                <li key={j} onClick={() => n(y.url)} className={y.cname ?? ''}>
                                    {y.text}
                                </li>
                            ))
                        }

                    </ul>
                ))
            }

        </section>
    )
}

export default FooterLinks