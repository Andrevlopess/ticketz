export type AuthInput = { email: string; password: string };
export type AuthResponse = { accessToken: string; refreshToken: string };

export type RefreshTokenInput = { refreshToken: string };
