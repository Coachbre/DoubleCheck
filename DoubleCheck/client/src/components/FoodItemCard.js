import React, { useEffect } from "react";

const FoodItemCard = ({ foodItem }) => {
    return (
        <div>
            <p key={foodItem?.id}>
                <ul>
                    <li>{foodItem?.name}</li>
                    <li>Quantity: {foodItem?.quantity}</li>
                    <li>Notes: {foodItem?.notes}</li>
                    <li>Category: {foodItem?.categoryId}</li>
                </ul>
            </p>
        </div>
    );
};
export default FoodItemCard;