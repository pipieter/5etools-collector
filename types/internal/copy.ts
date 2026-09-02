export interface Copy {
  _copy: any; // TODO
}

export type Nullable<T> = { [K in keyof T]: T[K] | null };
export type Copyable<T> = Partial<Nullable<T>> & Copy;
