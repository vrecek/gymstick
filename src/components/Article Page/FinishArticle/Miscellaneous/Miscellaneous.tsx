import React from 'react'
import Information from './Information'
import {AiFillLike, AiFillDislike, AiFillEye} from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'

const Miscellaneous = () => {
    return (
        <section className="misc">

            <Information icon={<AiFillLike />} value={999} />
            <Information icon={<AiFillDislike />} value={999} />

            <Information icon={<BiCommentDots />} value={999} />

            <Information icon={<AiFillEye />} value={999} />

        </section>
    )
}

export default Miscellaneous