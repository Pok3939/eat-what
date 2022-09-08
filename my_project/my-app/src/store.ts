import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";
import { dishReducer } from "./dishes/reducer"

const reducers = combineReducers({
    auth: authReducer,
    dishes: dishReducer
})

export type RootState = ReturnType<typeof reducers>

export const store = configureStore({
    reducer: reducers
})