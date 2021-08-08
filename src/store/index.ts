import { configureStore } from "@reduxjs/toolkit"

import mainReducer from "./reducers/main"

export const store = configureStore({
    reducer: {
        main: mainReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type StoreState = ReturnType<typeof store.getState>
