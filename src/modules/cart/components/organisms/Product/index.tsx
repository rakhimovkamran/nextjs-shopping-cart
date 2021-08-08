import { ChangeEvent, FC } from "react"

import type { CartProduct as ProductProps } from "common/types/Product"
import { useAppDispatch } from "common/hooks/store"
import { Price } from "common/components/atoms"
import CloseIcon from "assets/svg/close.svg"

import { QuantityInput } from "../../molecules"

import {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
    enterProductQuantity,
} from "store/reducers/main"

const Product: FC<ProductProps> = ({ _id, ...product }) => {
    const dispatch = useAppDispatch()

    const handleRemoveProduct = () => dispatch(removeProductFromCart(_id))

    const handleQuantityIncrease = () => dispatch(increaseProductQuantity(_id))
    const handleQuantityDecrease = () => dispatch(decreaseProductQuantity(_id))

    const handleEnterQuantity = ({ target }: ChangeEvent<HTMLInputElement>) => {
        dispatch(enterProductQuantity({ _id, quantity: Number(target.value) }))
    }

    return (
        <div className="w-full grid grid-cols-3 items-center border-b py-4">
            <div className="flex items-center">
                <img
                    className="w-36 h-36 rounded-full"
                    src={product.photoURL}
                    alt={product.name}
                />

                <div className="flex flex-col ml-4">
                    <span className="mb-1">{product.name}</span>
                    <span className="text-gray-400 text-sm">{_id}</span>
                </div>
            </div>

            <div className="flex justify-center">
                <QuantityInput
                    onIncrease={handleQuantityIncrease}
                    onDecrease={handleQuantityDecrease}
                    onChange={handleEnterQuantity}
                    value={product.quantity}
                />
            </div>

            <div className="flex justify-between">
                <Price
                    className="text-lg"
                    {...product.price}
                    isSublimed={true}
                />
                <CloseIcon
                    className="cursor-pointer transition-opacity opacity-50 hover:opacity-100"
                    onClick={handleRemoveProduct}
                />
            </div>
        </div>
    )
}

export default Product
