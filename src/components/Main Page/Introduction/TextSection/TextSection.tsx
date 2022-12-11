import React from 'react'
import Button from '../../../Common/Button'
import HeaderIcon from './HeaderIcon'
import IntroductionTextContainer from './IntroductionTextContainer'

const TextSection = () => {
    return (
        <article className="text-section">

            <HeaderIcon />

            <IntroductionTextContainer />

            <Button text='See our offer' />

        </article>
    )
}

export default TextSection