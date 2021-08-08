import type { AppProps } from "next/app"
import "assets/styles/index.css"

import { Provider as StoreProvider } from "react-redux"
import { store } from "store"

function Application({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider store={store}>
            <Component {...pageProps} />
        </StoreProvider>
    )
}

export default Application
