import { FC } from "react"

interface AsideWrapperProps {
    title?: string
}

const AsideWrapper: FC<AsideWrapperProps> = ({ children, title }) => {
    return (
        <aside className="w-550p h-screen max-h-800p sticky top-0 py-10">
            <section className="bg-gradient-to-tr w-full h-full px-11 py-10 from-gray-700 to-gray-900 rounded-xl shadow-xl">
                {title && (
                    <h1 className="text-3xl font-medium text-white">{title}</h1>
                )}

                <div className="flex flex-col">{children}</div>
            </section>
        </aside>
    )
}

export default AsideWrapper
