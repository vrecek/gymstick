import React from 'react'
import { BlogInfo } from '../../../interfaces/HomepageInterfaces'
import Category from '../../Main Page/Dropdowns/Content/Content_Blog/Category'
import Tags from '../../Main Page/Dropdowns/Content/Content_Blog/Tags'

const TagsCategory = ({tags, category}: BlogInfo) => {
    return (
        <section className="tags-category">

            <Tags tags={tags} />
            <Category>{category}</Category>

        </section>
    )
}

export default TagsCategory