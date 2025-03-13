export default () => ({
    jwtSecret: process.env.JWT_SECRET!,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET!
})