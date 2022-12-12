import React from 'react'
import '../../../../css/SliderContainer.css'
import FigureImage from '../../../Common/FigureImage'
import ButtonsWrap from './ButtonsWrap'
import slide1 from '../../../../images/slide1.jpg'
import slide2 from '../../../../images/slide2.jpg'
import slide3 from '../../../../images/slide3.jpg'

const SliderContainer = () => {
    const [interval, setTime] = React.useState<NodeJS.Timer>() 


    return (
        <ButtonsWrap setTime={setTime} interval={interval}>

            <div className="moving">

                <FigureImage source={slide3} altTxt='Image' />

                <FigureImage source={slide1} altTxt='Image' />
                <FigureImage source={slide2} altTxt='Image' />
                <FigureImage source={slide3} altTxt='Image' />

                <FigureImage source={slide1} altTxt='Image' />

            </div>

        </ButtonsWrap>
    )
}

export default SliderContainer