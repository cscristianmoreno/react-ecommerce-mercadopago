import { useSelector } from "react-redux";
import { RootState } from "../models/redux.model";

export const useSelect: RootState = <T,>(slice: string): T => useSelector((state: RootState): T => state[slice]);