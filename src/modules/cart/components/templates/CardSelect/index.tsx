import { FC } from "react"

import { CreditCard as CreditCardProps } from "common/types/CreditCard"
import { CreditCard } from "../../organisms"

import MasterCardLogo from "assets/svg/mastercard.svg"

const CardSelect: FC<CreditCardProps> = (cardInfo) => {
    return (
        <div className="mt-8">
            <span className="text-gray-400">Card Type</span>
            <div className="flex h-48 mb-10 relative w-full items-center mt-5">
                <CreditCard {...cardInfo} />

                <MasterCardLogo className="w-28 absolute cursor-pointer -right-12 transition-opacity opacity-70 hover:opacity-100" />
            </div>
        </div>
    )
}

export default CardSelect
