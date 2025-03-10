module.exports = {
    root: true,
    extends: ["@repo/eslint-config/library.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname
    }
}
xcopy "C:\Users\andre.vitor\andrevlopes\projects\drizzle\*" "C:\Users\andrevitor\andrevlopes\projects\ticketz" /E /H /C /I