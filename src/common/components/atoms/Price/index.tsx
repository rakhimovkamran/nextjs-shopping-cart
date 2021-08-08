import { FC } from "react"

import type { Price as PriceInterface } from "common/types/Price"
import { SIGNS } from "common/constants/Currency"

interface PriceProps extends PriceInterface {
    isSublimed?: boolean
    className?: string
}

const Price: FC<PriceProps> = ({ value, currency, isSublimed, className }) => {
    return (
        <span className={className}>
            {isSublimed ? (
                <sup className="mr-1">{SIGNS[currency]}</sup>
            ) : (
                SIGNS[currency]
            )}
            {value.toFixed(2)}
        </span>
    )
}

export default Price
