//handles all 'food item' related fetch calls to server

import { getToken } from './authManager';

const baseUrl = '/api/FoodItem';

export const getAllFoodItems = (PantryListId) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/GetByPantry/${PantryListId}`, {
            // ^^ fetch url must match related http attribute in (FoodItem) server controller vv
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

export const deleteFoodItem = (id) => {
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

export const editFoodItem = (foodItem) => {
    return getToken().then((token) =>
    fetch(`${baseURL}/Edit/${foodItem.id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(foodItem),
    }))
};