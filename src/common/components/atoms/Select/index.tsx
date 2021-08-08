import { ChangeEvent, FC } from "react"

interface SelectProps {
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
    options: { label: string; value: string | number }[]
    placeholder?: string
}

const Select: FC<SelectProps> = ({ options, onChange, placeholder }) => {
    return (
        <select
            className="border-b w-full bg-transparent border-gray-600 text-white pb-1 pt-1"
            onChange={onChange}
        >
            {placeholder && (
                <option value="" disabled selected>
                    {placeholder}
                </option>
            )}

            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
}

export default Select
