import { FC } from "react"
import Head from "next/head"

interface PageTemplateProps {
    title: string

    description?: string
    keywords?: string[]
}

const PageTemplate: FC<PageTemplateProps> = ({
    title,
    description,
    keywords,
    children,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} key="title" />
                <link rel="shortcut icon" href="/favicon.ico" />

                <meta
                    content="initial-scale=1.0, width=device-width"
                    name="viewport"
                />

                {description && (
                    <meta name="description" content={description} />
                )}

                {keywords && (
                    <meta name="description" content={keywords.join(", ")} />
                )}
            </Head>

            <main className="h-screen w-full max-w-1400p mx-auto relative">
                {children}
            </main>
        </>
    )
}

export default PageTemplate
