import React from 'react'

const ExpandedMenu = ({hiddenText}: {hiddenText: string}) => {
    return (
        <section className="expanded-menu">

            <p>{hiddenText}</p>

        </section>
    )
}

export default ExpandedMenu