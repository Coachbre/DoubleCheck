//handles all 'pantry' related fetch calls to server

import { getToken } from './authManager';

const baseUrl = '/api/FoodItem';

export const getAllFoodItems = (pantryListId) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/GetByPantry/${pantryListId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json());
    });
};