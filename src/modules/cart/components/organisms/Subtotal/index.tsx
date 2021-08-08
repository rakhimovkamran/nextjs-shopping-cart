import { useMemo } from "react"

import { useAppSelector } from "common/hooks/store"
import { Button, Price } from "common/components/atoms"

import Chevron from "assets/svg/chevron.svg"

const Subtotal = () => {
    const products = useAppSelector(({ main }) => main.cart)

    const totalPrice = useMemo(
        () =>
            products
                .map(({ price }) => price.value)
                .reduce((total, x) => total + x, 0),
        [products]
    )

    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className="sticky bottom-0 bg-gradient-to-t from-gray-100 py-10 flex justify-between">
            <span className="w-64">
                <Button size="lg" onClick={handleBack} type="secondary">
                    <Chevron className="mr-2" /> Back to Catalogue
                </Button>
            </span>

            <span className="text-xl text-gray-700">
                Subtotal:
                <Price
                    className="font-medium ml-2 text-black text-2xl"
                    value={totalPrice}
                    currency="USD"
                />
            </span>
        </div>
    )
}

export default Subtotal
