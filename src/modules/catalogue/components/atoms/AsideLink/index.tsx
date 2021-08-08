import { FC } from "react"
import Link from "next/link"

interface AsideLinkProps {
    label: string
    to?: string
}

const AsideLink: FC<AsideLinkProps> = ({ to = "#", label }) => {
    return (
        <Link href={to}>
            <a className="text-2xl text-white font-light mb-5 transition-opacity opacity-80 hover:opacity-100">
                {label}
            </a>
        </Link>
    )
}

export default AsideLink
