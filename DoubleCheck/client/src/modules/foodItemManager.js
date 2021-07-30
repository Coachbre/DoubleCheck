//handles all 'pantry' related fetch calls to server

import { getToken } from './authManager';

const baseUrl = '/api/FoodItem';
// matches table name

export const getAllFoodItems = (PantryListId) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${PantryListId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("An unknown error occurred while trying to get pantry contents");
                }
            });
    });
};