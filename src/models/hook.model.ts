import { Dispatch, SetStateAction } from "react";

export type HookModelStruct<T> = [
    T,
    Dispatch<SetStateAction<T>>
]