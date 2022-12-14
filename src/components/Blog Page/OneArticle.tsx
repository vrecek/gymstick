import React from 'react'
import img from '../../images/blog/blog1.jpg'
import Button from '../Common/Button'
import FigureImage from '../Common/FigureImage'
import Tags from '../Main Page/Dropdowns/Content/Content_Blog/Tags'
import Category from '../Main Page/Dropdowns/Content/Content_Blog/Category'

const OneArticle = () => {
    return (
        <article className="one-article">

            <FigureImage source={img} altTxt='Article' />

            <div className='wrap'>

                <p className="header">Lorem ipsum dolorsit amet coqnestur</p>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam velit.</p>
                <Button text='Read more' />


            </div>

            <Category>Dolore</Category>

            <Tags />

        </article>
    )
}

export default OneArticle