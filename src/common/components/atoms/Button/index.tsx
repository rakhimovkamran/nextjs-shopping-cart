import { FC } from "react"
import cn from "classnames"

interface ButtonProps {
    type?: "primary" | "secondary" | "tertiary"
    htmlType?: "button" | "submit"
    size?: "md" | "lg"
    className?: string

    onClick?: () => void
}

const Button: FC<ButtonProps> = ({
    htmlType = "button",
    type = "primary",
    size = "md",
    onClick,
    className,
    children,
}) => {
    const buttonClasses = cn(
        "w-full flex font-sans font-extralight items-center justify-center bg-gradient-to-tr text-white",
        "rounded-md shadow-sm transition-opacity hover:opacity-90",
        {
            "py-2.5 text-lg": size === "lg",
            "py-2 text-md": size === "md",
        },
        {
            "from-blue-500 to-blue-500": type === "primary",
            "from-gray-600 to-gray-700": type === "secondary",
            "from-purple-600 to-purple-700": type === "tertiary",
        },
        className
    )

    return (
        <button onClick={onClick} type={htmlType} className={buttonClasses}>
            {children}
        </button>
    )
}

export default Button
