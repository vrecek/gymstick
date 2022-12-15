export type ProductMisc = {
    icon: JSX.Element
    text: string
    cname?: string
}

export type QuantitySection = {
    quantity: number
    set: React.Dispatch<React.SetStateAction<number>>
}