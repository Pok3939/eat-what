import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";
import { dishReducer } from "./dishes/reducer";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const reducers = combineReducers({
  auth: authReducer,
  dishes: dishReducer,
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: reducers,
});
