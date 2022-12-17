import Products from "../data/Products";
import { ProductType } from "../interfaces/ProductType";
import Options from "./AbstractOptions";

export type ProductCard = {
    image: string
    price: number
    id: string
    name: string
}


export default class Product extends Options<ProductCard, ProductType> {
    public constructor() {
        super(Products)
    }


    public getAll(): ProductCard[] {
        return this.shuffleProducts(
            Products.map(x => {
                return {
                    image: x.image,
                    price: x.price,
                    id: x.id,
                    name: x.name
                }
            })
        )
    }

    
    public getCard(): ProductCard {
        const {image, price, id, name}: ProductType = this.itemArray[this.randomIndex(this.itemArray.length)]        

        return {
            image,
            price,
            id,
            name
        }
    }
}