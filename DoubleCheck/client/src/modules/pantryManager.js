//handles all 'pantry' related fetch calls to server

import { getToken } from './authManager';

const baseUrl = '/api/PantryList';
//^ this is a relative URL (benefit of using a proxy)

export const getAllPantries = () => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("An unknown error occurred while trying to get all pantries");
                }
            });
    });
};

export const getByUser = () => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/Pantries`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to fetch your pantries");
            }
        });
    });
};

export const getPantryById = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json());
    });
};

export const deletePantry = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
    });
};