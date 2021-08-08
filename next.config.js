module.exports = {
    reactStrictMode: true,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        })

        return config
    },

    async redirects() {
        return [
            {
                destination: "/catalogue",
                permanent: true,
                source: "/",
            },
        ]
    },
}
