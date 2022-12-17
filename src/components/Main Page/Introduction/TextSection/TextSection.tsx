import React from 'react'
import Button from '../../../Common/Button'
import HeaderIcon from './HeaderIcon'
import IntroductionTextContainer from './IntroductionTextContainer'
import {scroller} from 'react-scroll'
import { scrollOptions } from '../../../../functions/scrollOptions'

const TextSection = () => {
    return (
        <article className="text-section">

            <HeaderIcon />

            <IntroductionTextContainer />

            <Button action={() => scroller.scrollTo('dropdowns', scrollOptions)} text='See our offer' />

        </article>
    )
}

export default TextSection