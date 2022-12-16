export type ProductType = {
    image: string
    additionalImgs: string[]
    name: string
    price: number
    inStock: number
    description: string
    informations: ProductInformations[]
    id: string
}

export type ProductInformations = {
    header: string
    value: string | number
}