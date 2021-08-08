export interface CreditCard {
    name: string
    number: string

    expires: {
        year: number
        month: number
    }
}
