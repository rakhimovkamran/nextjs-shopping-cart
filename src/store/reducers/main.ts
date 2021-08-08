import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { StoreState } from "store"

import type { CartProduct, Product } from "common/types/Product"
import { MOCK_PRODUCTS } from "common/constants/Products"

export type MainState = {
    products: Product[] | []
    cart: CartProduct[] | []
}

const initialState: MainState = {
    products: MOCK_PRODUCTS,
    cart: [],
}

export const mainSlice = createSlice({
    name: "main",

    initialState,

    reducers: {
        addProductToCart: (state, { payload }: PayloadAction<string>) => {
            const targetProduct = state.products.find(
                ({ _id }) => _id === payload
            )!

            state.cart = [...state.cart, { ...targetProduct, quantity: 1 }]
        },

        removeProductFromCart: (state, { payload }: PayloadAction<string>) => {
            state.cart = state.cart.filter(({ _id }) => _id !== payload)
        },

        increaseProductQuantity: (
            state,
            { payload }: PayloadAction<string>
        ) => {
            const price = state.products.find(
                ({ _id }) => _id === payload
            )!.price

            const target =
                state.cart[state.cart.findIndex(({ _id }) => _id === payload)]!

            target.quantity += 1
            target.price.value = target.quantity * price.value
        },

        decreaseProductQuantity: (
            state,
            { payload }: PayloadAction<string>
        ) => {
            const price = state.products.find(
                ({ _id }) => _id === payload
            )!.price

            const target =
                state.cart[state.cart.findIndex(({ _id }) => _id === payload)]!

            if (target.quantity - 1 !== -1) {
                target.quantity -= 1
            }

            target.price.value = target.quantity * price.value
        },

        enterProductQuantity: (
            state,
            {
                payload,
            }: PayloadAction<{
                _id: string
                quantity: number
            }>
        ) => {
            const price = state.products.find(
                ({ _id }) => _id === payload._id
            )!.price

            const target =
                state.cart[
                    state.cart.findIndex(({ _id }) => _id === payload._id)
                ]!

            target.quantity = payload.quantity
            target.price.value = target.quantity * price.value
        },
    },
})

export const {
    addProductToCart,
    removeProductFromCart,

    increaseProductQuantity,
    decreaseProductQuantity,
    enterProductQuantity,
} = mainSlice.actions

export const getProducts = (state: StoreState) => state.main.products
export const getCart = (state: StoreState) => state.main.cart

export default mainSlice.reducer
