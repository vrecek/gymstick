import React from 'react'
import Button from '../../Common/Button'
import InputDiv from './InputDiv'
import editColors from '../../../functions/inputColorsChange'
import Client, { Aliases as a, LOAD, TB} from '../../../functions/Client'

const MailForm = () => {
    const submitFunc = (e: React.FormEvent): void => {
        e.preventDefault()


        const t: a.Form = e.target as a.Form,
              load: LOAD.Loading = new Client.Loading(),
              box: TB.TextBox = new Client.TextBox({
                cname: 'result-box true',
                message: 'Successfully sent'
              }),
              elements: a.Input[] = Array.from(t.elements as a.Inputs).slice(0, 4)


        load.defaultStyleDots({
            position: 'containerWidth',
            backgroundClr: 'rgba(240, 240, 240, .8)'
        })
        load.append(t)


        if(elements.map(x => x.value).some(x => !x)) {
            box.setMessage = 'Please fill all fields'
            box.setClass = 'result-box false'
        }

        setTimeout(() => {
            box.removePreviousBox(t)
               .initializeBox()
               .appendTo(t, 2500)

            load.remove()
        }, 2000);
    }


    return (
        <form onSubmit={submitFunc}>

            <InputDiv>Username</InputDiv>
            <InputDiv>Mail address</InputDiv>
            <InputDiv>Subject</InputDiv>

            <textarea onChange={editColors}></textarea>

            <Button text='Submit' />

        </form>
    )
}

export default MailForm