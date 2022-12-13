import React from 'react'
import { DropdownOption } from '../../../../interfaces/HomepageInterfaces'
import ExpandedMenu from './ExpandedMenu'
import OptionHeader from './OptionHeader'

const Option = ({header, hiddenText, topic, ddIndex, allDds, setContent, contentValue}: DropdownOption) => {
    return (
        <section className="option">

            <OptionHeader 
                contentValue={contentValue} 
                setContent={setContent} 
                allDds={allDds} 
                ddIndex={ddIndex} 
                topic={topic} 
                header={header} 
            />

            <ExpandedMenu hiddenText={hiddenText} />

        </section>
    )
}

export default Option