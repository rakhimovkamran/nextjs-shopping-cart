import { FC, useMemo } from "react"

import type { Product as ProductProps } from "common/types/Product"
import { useAppDispatch, useAppSelector } from "common/hooks/store"
import { Price, Button } from "common/components/atoms"

import { addProductToCart, removeProductFromCart } from "store/reducers/main"

const Product: FC<ProductProps> = (product) => {
    const cart = useAppSelector(({ main }) => main.cart)
    const dispatch = useAppDispatch()

    const isExistsInCart = useMemo(
        () => !!cart.find(({ _id }) => _id === product._id),
        [cart, product._id]
    )

    const handleCartOperations = () => {
        isExistsInCart
            ? dispatch(removeProductFromCart(product._id))
            : dispatch(addProductToCart(product._id))
    }

    return (
        <div className="w-full p-5 bg-white rounded-lg shadow-lg items-center flex flex-col">
            <img
                src={product.photoURL}
                className="w-32 h-32 rounded-full mb-4"
                alt={product.name}
            />

            <div className="flex w-full justify-between mb-4">
                <span>{product.name}</span>
                <Price {...product.price} />
            </div>

            <Button type="tertiary" onClick={handleCartOperations}>
                {isExistsInCart ? "Remove from Cart" : "Add to Cart"}
            </Button>
        </div>
    )
}

export default Product
