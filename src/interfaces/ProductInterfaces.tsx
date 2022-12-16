import { ProductType } from "./ProductType"

export type ProductMisc = {
    icon: JSX.Element
    text: string
    cname?: string
}

export type QuantitySection = {
    quantity: number
    set: React.Dispatch<React.SetStateAction<number>>
    inStock: number
}

export type ProductItem = {
    product: ProductType
}

export type ProductPrice = {
    price: number
    inStock: number
}

export type RightTotal = {
    quantity: number
    price: number
}