import type { AppProps } from "next/app"
import "assets/styles/index.css"
import Head from "next/head"

import { Provider as StoreProvider } from "react-redux"
import { store } from "store"

function Application({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </Head>

            <StoreProvider store={store}>
                <Component {...pageProps} />
            </StoreProvider>
        </>
    )
}

export default Application
