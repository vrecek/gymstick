import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { DD } from '../../../../functions/Client'
import { DropdownContent, DropdownHeader } from '../../../../interfaces/HomepageInterfaces'
import Icon from '../../../Common/Icon'

const OptionHeader = ({topic, header, ddIndex, allDds, setContent, contentValue}: DropdownHeader) => {
    const toggleMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              menu: HTMLElement = t.parentElement!.children[1] as HTMLElement,
              arrow: HTMLElement = t.children[1].children[1] as HTMLElement,
              dd: DD.DropDownType = allDds[ddIndex]


        for(let [i, x] of Object.entries(allDds)) {
            if(parseInt(i) === ddIndex || !x.getActive) continue

            x.switchActive()
            x.shrinkMenu()

            const allOpts: Element[] = Array.from(t.parentElement!.parentElement!.children)
            x.rotateArrow(allOpts[parseInt(i)].children[0].children[1].children[1] as HTMLElement)
        }

        dd.switchActive()
        dd.rotateArrow(arrow)

        if(!dd.getActive) {
            dd.shrinkMenu()
            setContent(DropdownContent.TEXT)

            return
        }

        dd.expandMenu(menu)

        setContent(contentValue)
    }


    return (
        <section onClick={toggleMenu} className="header">

            <p className="topic">{topic}</p>

            <div>
                
                <p className="header">{header}</p>
                <Icon><MdKeyboardArrowDown /></Icon>

            </div>

        </section>
    )
}

export default OptionHeader