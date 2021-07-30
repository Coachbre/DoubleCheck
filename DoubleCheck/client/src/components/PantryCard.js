//card view of each pantry option
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { deletePantry, getPantryById } from "../modules/pantryManager";

const PantryCard = ({ pantry }) => {
    
    return (
        <div>
            <p key={pantry?.id}>{pantry?.name}</p>
        </div>
    );
};
export default PantryCard;