import React from 'react'
import { RelatedType } from '../../../../interfaces/ArticleInterfaces'
import RelatedArticle from './RelatedArticle'

const Related = ({related}: {related: RelatedType[]}) => {
    return (
        <section className="related-articles">

            <p className="finish-header">Related articles</p>

            {
                related.map((x, i) => (
                    <RelatedArticle
                        key={i}
                        image={x.image}
                        id={x.id}
                        title={x.title}
                        posted={x.posted}
                        category={x.category}
                    />
                ))
            }

        </section>
    )
}

export default Related