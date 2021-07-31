//handles all 'food item' related fetch calls to server

import { getToken } from './authManager';

const baseUrl = '/api/FoodItem';

export const getAllFoodItems = (PantryListId) => {
    return getToken().then((token) => {
        // vv fetch url must match related http attribute in (FoodItem) server controller vv
        return fetch(`${baseUrl}/GetByPantry/${PantryListId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((foodItems) => foodItems.json());
    });
};

export const addFoodItem = (foodItem) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/Add`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foodItem)
        })
    })
};

export const deleteFoodItem = () => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/Delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
    });
};