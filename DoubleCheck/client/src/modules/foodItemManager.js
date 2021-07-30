//handles all 'food item' related fetch calls to server

import { getToken } from './authManager';

const baseUrl = '/api/FoodItem';

export const getAllFoodItems = (PantryListId) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/GetByPantry/${PantryListId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((foodItems) => foodItems.json());
    });
};