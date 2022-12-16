import Products from "../data/Products";
import { ProductType } from "../interfaces/ProductType";

export type ProductCard = {
    image: string
    price: number
    id: string
    name: string
}

export default class Product {
    private static randomIndex(): number {
        return ~~(Math.random() * Products.length)
    }


    private static shuffleProducts<T = any>(array: T[]): T[] {
        let currentIndex = array.length,
            randomIndex


        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = 
            [array[randomIndex], array[currentIndex]]
        }

        return array
    }


    public static getOne(id?: string): ProductType | null {
        if(!id) return null

        const product = Products.filter(x => x.id === id)?.[0]

        return product ?? null
    }


    public static getAllCards(): ProductCard[] {
        return this.shuffleProducts<ProductCard>(
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

    
    public static getCard(): ProductCard {
        const {image, price, id, name}: ProductType = Products[this.randomIndex()]        

        return {
            image,
            price,
            id,
            name
        }
    }
}