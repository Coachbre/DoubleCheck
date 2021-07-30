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

export const addFoodItem = (foodItem) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/FoodItem`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foodItem)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error("Unknown error while trying to add new item");
            }
        })
    })
}