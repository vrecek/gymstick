import React from 'react'

const Tags = ({tags}: {tags: string[]}) => {
    return (
        <section className="tags">

            {
                tags.map((x, i) => (
                    <span key={i}>
                        {x}
                    </span>
                ))
            }

        </section>
    )
}

export default Tags