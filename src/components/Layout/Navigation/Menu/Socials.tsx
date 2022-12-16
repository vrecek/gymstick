import React from 'react'
import { LinksList } from '../../../../interfaces/CommonInterfaces'
import Icon from '../../../Common/Icon'
import {BsCodeSlash, BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare, FaInstagramSquare} from 'react-icons/fa'

const Socials = () => {
    const list: LinksList<JSX.Element>[] = [
        {text: <FaGithubSquare />, url: 'https://github.com/vrecek'},    
        {text: <BsLinkedin />, url: 'https://github.com/vrecek'},    
        {text: <FaInstagramSquare />, url: 'https://github.com/vrecek'},    
        {text: <BsCodeSlash />, url: 'https://github.com/vrecek/gymstick'}    
    ]


    return (
        <section className="socials">

            {
                list.map((x, i) => (
                    <Icon action={() => window.open(x.url, '_blank')} key={i}>

                        {x.text}

                    </Icon>
                ))
            }

        </section>
    )
}

export default Socials