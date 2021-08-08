import { ChangeEvent, FC } from "react"
import cn from "classnames"

interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
    type?: "text" | "number"
}

const Input: FC<InputProps> = ({
    placeholder,
    onChange,
    className,
    type = "text",
}) => {
    const containerClasses = cn(
        "relative w-full h-20 input-container",
        className
    )

    return (
        <div className={containerClasses}>
            <input
                className="border-b absolute z-50 w-full bg-transparent border-gray-600 text-white pb-1 pt-1"
                onChange={onChange}
                spellCheck={false}
                placeholder=" "
                type={type}
            />

            <span className="input-placeholder absolute top-0 left-0 transition-all text-gray-400 -z-10">
                {placeholder}
            </span>
        </div>
    )
}

export default Input
