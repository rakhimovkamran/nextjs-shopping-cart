import { ChangeEvent, FC } from "react"
import cn from "classnames"

interface QuantityInputProps {
    value: number

    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onIncrease: () => void
    onDecrease: () => void
}

const QuantityInput: FC<QuantityInputProps> = ({
    value,

    onIncrease,
    onDecrease,
    onChange,
}) => {
    const inputClasses = cn(
        "border w-16 text-center border-gray-300 bg-transparent py-1.5 font-sans rounded-lg mx-3"
    )

    const buttonClasses = cn(
        "text-24 opacity-50 transition-opacity hover:opacity-100"
    )

    return (
        <div className="flex items-center">
            <button className={buttonClasses} onClick={onDecrease}>
                -
            </button>

            <input
                className={inputClasses}
                onChange={onChange}
                type="number"
                value={value}
            />

            <button className={buttonClasses} onClick={onIncrease}>
                +
            </button>
        </div>
    )
}

export default QuantityInput
