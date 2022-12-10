import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TendersStoreType } from "../index";

export const useTendersStoreSelector: TypedUseSelectorHook<TendersStoreType> = useSelector;
