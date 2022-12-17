import { ArticleType } from "../interfaces/ArticleType";
import Options from "./AbstractOptions";
import Articles from '../data/Articles'
import { RelatedType } from "../interfaces/ArticleInterfaces";

export type ArticlePreview = {
    tags: string[]
    image: string
    title: string
    shortPara: string
    id: string
    category: string
}

export default class Article extends Options<ArticlePreview, ArticleType> {
    public constructor() {
        super(Articles)
    }


    public getRelated(tags: string[], category: string, title: string): RelatedType[] {
        const related = Array.from(new Set([
            ...this.itemArray.filter(x => x.category === category).map(y => y.id),
            ...this.itemArray.filter(x => new RegExp(title, 'i').test(x.title)).map(y => y.id),
            ...this.itemArray.filter(x => x.tags.some(y => tags.includes(y))).map(y => y.id)
        ]))

        const mappedRelated = related.map(x => {
            const {image, title, id, category, posted}: ArticleType = this.itemArray.filter(y => y.id === x)[0]

            return {
                image,
                title,
                id,
                category,
                posted
            }
        })

        return this.shuffleProducts<RelatedType>(mappedRelated)
    }


    public getAll(): ArticlePreview[] {
        return this.shuffleProducts(
            Articles.map(x => {
                return {
                    image: x.image,
                    category: x.category,
                    tags: x.tags,
                    id: x.id,
                    title: x.title,
                    shortPara: x.text.slice(0, 50)
                }
            })
        )
    }


    public getCard(): ArticlePreview {
        const {image, id, category, tags, text, title}: ArticleType = this.itemArray[this.randomIndex(this.itemArray.length)]        

        return {
            image,
            category,
            tags,
            id,
            title,
            shortPara: text.slice(0, 50)
        }
    }
}