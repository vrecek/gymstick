import React from 'react'
import { Aliases } from '../../../functions/Client'
import editColors from '../../../functions/inputColorsChange'

const InputDiv = ({children}: Aliases.Text) => {
    return (
        <div className="input-div">

            <label>{children}</label>

            <input onChange={editColors} type="text" spellCheck='false' />

        </div>
    )
}

export default InputDiv