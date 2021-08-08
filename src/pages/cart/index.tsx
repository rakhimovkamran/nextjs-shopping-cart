import { ChangeEvent, useState } from "react"

import { MONTH_OPTIONS, YEAR_OPTIONS } from "common/constants/Expires"
import { Button, Input, Select } from "common/components/atoms"
import { PageTemplate } from "common/components/templates"
import type { CreditCard } from "common/types/CreditCard"
import { useAppSelector } from "common/hooks/store"
import { cc_format } from "common/utils/string"

import { AsideWrapper, CardSelect } from "modules/cart/components/templates"
import {
    EmptyState,
    Product,
    Subtotal,
} from "modules/cart/components/organisms"

import { AnimateSharedLayout } from "framer-motion"

export default function Cart() {
    const products = useAppSelector(({ main }) => main.cart)
    const [creditCard, setCreditCard] = useState<CreditCard>({} as CreditCard)

    const handleCardNameChange = ({
        target,
    }: ChangeEvent<HTMLInputElement>) => {
        setCreditCard((p) => ({ ...p, name: target.value }))
    }

    const handleCardNumberChange = ({
        target,
    }: ChangeEvent<HTMLInputElement>) => {
        // Only numbers for text input
        if (/[0-9]/.test(target.value) || !target.value) {
            target.value = cc_format(target.value)
            setCreditCard((p) => ({ ...p, number: target.value }))
        } else {
            target.value = ""
        }
    }

    const handleMonthChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        setCreditCard((p) => ({
            ...p,
            expires: { ...p.expires, month: Number(target.value) },
        }))
    }

    const handleYearChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        setCreditCard((p) => ({
            ...p,
            expires: { ...p.expires, year: Number(target.value) },
        }))
    }

    return (
        <PageTemplate title="Cart">
            <section className="px-4 h-screen">
                <section className="flex">
                    <section className="w-full flex flex-col py-7 pr-20 mr-2">
                        <h1 className="text-3xl mt-10 mb-8">Shopping Cart</h1>

                        {products.length !== 0 ? (
                            <>
                                <div className="flex flex-col flex-1">
                                    <AnimateSharedLayout>
                                        {products.map((product) => (
                                            <Product
                                                key={product._id}
                                                {...product}
                                            />
                                        ))}
                                    </AnimateSharedLayout>
                                </div>

                                <Subtotal />
                            </>
                        ) : (
                            <EmptyState />
                        )}
                    </section>

                    <AsideWrapper title={"Card Details"}>
                        <CardSelect {...creditCard} />

                        <div className="flex-1 flex flex-col">
                            <Input
                                onChange={handleCardNameChange}
                                placeholder="Name on Card"
                            />
                            <Input
                                onChange={handleCardNumberChange}
                                placeholder="Card on Number"
                            />

                            <div className="flex w-full justify-between mt-2">
                                <div className="w-full relative">
                                    <span className="absolute -top-6 text-sm text-gray-400">
                                        Expiration Date
                                    </span>

                                    <div className="grid grid-cols-2 gap-3 mt-1.5">
                                        <Select
                                            onChange={handleMonthChange}
                                            options={MONTH_OPTIONS}
                                            placeholder={"MM"}
                                        />
                                        <Select
                                            onChange={handleYearChange}
                                            options={YEAR_OPTIONS}
                                            placeholder={"YYYY"}
                                        />
                                    </div>
                                </div>

                                <Input className="ml-10" placeholder={"CVV"} />
                            </div>
                        </div>

                        <Button size="lg">Check Out</Button>
                    </AsideWrapper>
                </section>
            </section>
        </PageTemplate>
    )
}
