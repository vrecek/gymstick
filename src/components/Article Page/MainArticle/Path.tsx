import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const Path = () => {
    const n: NavigateFunction = useNavigate()

    return (
        <p className="path">

            <span onClick={() => n('/')}>Homepage</span>
            &#60;
            <span onClick={() => n('/blogs')}>Blogs</span>
            &#60;
            <span className="disabled">Article</span>

        </p>
    )
}

export default Path