module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/modules/components/**/**/*.{js,ts,jsx,tsx}",
        "./src/common/components/**/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,

    theme: {
        extend: {
            maxWidth: {
                "1400p": "1400px",
            },

            maxHeight: {
                "800p": "800px",
            },

            width: {
                "550p": "550px",
                "360p": "360px",
            },

            gridTemplateColumns: {
                "a-450p": "auto 450px",
            },

            fontFamily: {
                regular: "Gilroy-Regular",
                medium: "Gilroy-Medium",
                light: "Gilroy-Light",
                bold: "Gilroy-Bold",
            },
        },
    },
}
