import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Client, { DD } from '../../../../functions/Client'
import Icon from '../../../Common/Icon'

const CommentsToggler = () => {
    const dd: DD.DropDown = new Client.DropDown(500)

    const toggleComments = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              container: HTMLElement = t.parentElement!.children[1] as HTMLElement,
              arrow: HTMLElement = t.children[1] as HTMLElement


        dd.getActive
            ? dd.expandMenu(container)
            : dd.shrinkMenu(container)


        dd.switchActive()
        dd.rotateArrow(arrow)
    }


    return (
        <section onClick={toggleComments} className="toggle-comments">

            <p className="finish-header">Comments (99)</p>

            <Icon><MdKeyboardArrowDown /></Icon>

        </section>
    )
}

export default CommentsToggler