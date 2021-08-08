import { PageTemplate } from "common/components/templates"
import { useAppSelector } from "common/hooks/store"

import { Product } from "modules/catalogue/components/molecules"
import { Aside } from "modules/catalogue/components/templates"

export default function Catalogue() {
    const products = useAppSelector(({ main }) => main.products)

    return (
        <PageTemplate title="Catalogue">
            <section className="w-full py-4 flex">
                <Aside
                    menuItems={[
                        { to: "#", label: "Overview" },
                        { to: "#", label: "Recipes" },
                        { to: "#", label: "Favorite" },
                        { to: "#", label: "Community" },
                        { to: "#", label: "Setting" },
                    ]}
                />
                <section className="w-full p-10 rounded-md">
                    <h1 className="text-3xl mb-8">Recent Dishes</h1>

                    <section className="grid grid-cols-3 gap-4">
                        {products.map((product) => (
                            <Product key={product._id} {...product} />
                        ))}
                    </section>
                </section>
            </section>
        </PageTemplate>
    )
}
