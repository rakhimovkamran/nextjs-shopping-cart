import { FC } from "react"

import { useAppSelector } from "common/hooks/store"
import { AsideLink } from "../../atoms"

interface AsideProps {
    menuItems: {
        to?: string
        label: string
    }[]
}

const Aside: FC<AsideProps> = ({ menuItems }) => {
    const cart = useAppSelector(({ main }) => main.cart)

    return (
        <aside className="h-full sticky top-10 w-360p mr-4 bg-gradient-to-tr p-10 from-purple-500 to-purple-600 rounded-xl">
            <div className="flex flex-col h-full justify-between">
                <div>
                    <span className="text-4xl text-white font-medium">
                        eat<span className="text-yellow-400">dish._</span>
                    </span>

                    <div className="flex flex-col mt-10 mb-20">
                        {menuItems.map((link) => (
                            <AsideLink key={link.to} {...link} />
                        ))}
                    </div>
                </div>

                <AsideLink
                    to="/cart"
                    label={
                        cart.length
                            ? `Cart: ${cart.length} Items`
                            : "Cart is Empty"
                    }
                />
            </div>
        </aside>
    )
}

export default Aside
