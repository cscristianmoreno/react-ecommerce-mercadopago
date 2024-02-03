
export type FuncModelStruct<T = void, S = T> = (...args: T[]) => S extends void ? void: S;