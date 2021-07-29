//card view of each pantry option
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, CardBody} from "reactstrap";
import { deletePantry, getPantryById } from "../modules/pantryManager";

const Pantry = ({ pantry, getPantries }) => {

    const deleteSelectedPantry = (evt) => {
        evt.preventDefault();
        var results = (window.confirm('Delete the item?'))
        if (results) {
            deletePantry(pantry.id).then(() => {
                getPantries()
            })
        }
    };

    return (
        <Card>
            <CardBody>
                {/* <p key={pantry.id}>{pantry.name}</p> */}
                <Button onClick={deleteSelectedPantry}>Delete</Button>
            </CardBody>
        </Card >
    );
};
export default Pantry;