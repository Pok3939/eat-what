import { DishesActions } from "./action";
import { Dish } from "./state";

export interface DishState {
    dishes: Dish[]
}

const initialState: DishState = {
    dishes:[]
}

export const dishReducer = (state: DishState = 
    initialState, action: DishesActions): DishState => {
        switch (action.type) {
            case '@@dish/LOAD_DISHES':
                return {
                    ...state,
                    dishes: action.dishes
                }
                default:
                    return state;
        }
    }