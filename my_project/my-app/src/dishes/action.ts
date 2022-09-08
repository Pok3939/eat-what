import {Dish} from "./state";

export function loadDishes(dishes: Dish[]){
    return {
        type: '@@dish/LOAD_DISHES' as const,
        dishes: dishes
    }
}

export type LoadDishesAction = ReturnType<typeof loadDishes>

export type DishesActions = LoadDishesAction