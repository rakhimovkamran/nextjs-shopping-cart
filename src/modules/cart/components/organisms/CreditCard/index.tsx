import { FC, useMemo } from "react"
import type { CreditCard as CreditCardProps } from "common/types/CreditCard"
import VisaLogo from "assets/svg/visa.svg"

const placeholder = "●●●●  ●●●●  ●●●●  ●●●●"

const CreditCard: FC<CreditCardProps> = ({ number, name, expires }) => {
    const formattedNumber = useMemo(
        () =>
            number
                ? Array.from(placeholder)
                      .map((_, idx) =>
                          number[idx] ? number[idx] : placeholder[idx]
                      )
                      .join("")
                      .split("  ")
                : Array.from(placeholder).join("").split("  "),
        [number]
    )

    return (
        <div
            onClick={() => console.log(formattedNumber)}
            className="w-full shadow-2xl absolute h-48 -left-24 bg-gradient-to-tr from-blue-500 to-blue-800 text-white rounded-lg px-5 py-7 flex flex-col justify-between"
        >
            <VisaLogo className="bg-white shadow-lg h-10 rounded-lg" />

            <div className="flex items-center justify-between">
                {formattedNumber.map((part, idx) => (
                    <span key={idx}>{part}</span>
                ))}
            </div>

            <div className="flex items-center justify-between">
                <span className="truncate mr-4">{name || "Unknown"}</span>

                <span>
                    {expires?.month ?? "MM"}/
                    {expires?.year ? String(expires.year).slice(2) : "YY"}
                </span>
            </div>
        </div>
    )
}

export default CreditCard
