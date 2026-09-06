export type Nullable<T> = { [K in keyof T]: T[K] | null };
export type Variadic<T> = T | T[];
