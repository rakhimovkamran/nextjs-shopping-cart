import { Price } from "./Price"

export interface Product {
    _id: string
    name: string
    price: Price
    photoURL: string
}

export interface CartProduct extends Product {
    quantity: number
}
