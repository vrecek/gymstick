import React from 'react'
import { BiClipboard } from 'react-icons/bi'
import Icon from '../../Common/Icon'

const MailCopy = () => {
    const MAIL: string = 'vrecek-ffci@outlook.com'

    const copyToClipboard = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement

        t.style.scale = '.7'
        setTimeout(() => t.style.scale = '1', 500)

        window.navigator.clipboard.writeText(MAIL)
    }


    return (
        <section>

            <p className="mail">{MAIL}</p>

            <Icon action={copyToClipboard}>
                <BiClipboard />
            </Icon>

        </section>
    )
}

export default MailCopy