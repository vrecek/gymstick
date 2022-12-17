import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import '../../../../css/TextContainer.css'
import Button from '../../../Common/Button'

const TextContainer = () => {
    const n: NavigateFunction = useNavigate()
    

    return (
        <article className="text-container">

            <p className="header">Looking for a high quality products?</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, corporis beatae. Soluta molestias cupiditate id harum cumque alias illo neque, voluptatum quisquam debitis placeat iste optio.</p>
            <Button action={() => n('/shop')} text='View products' />

        </article>
    )
}

export default TextContainer