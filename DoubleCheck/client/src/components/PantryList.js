import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CardBody, Card } from "reactstrap";
import Pantry from './Pantry';
import { getAllPantries, deletePantry } from "../modules/pantryManager";

const PantryList = () => {
    const [pantries, setPantries] = useState([]);
    // ^initially set to an empty array
    const getPantries = () => {
        getAllPantries().then(pantries => setPantries(pantries));
    };


    const deleteSelectedPantry = (evt) => {
        evt.preventDefault();
        var results = (window.confirm('Delete the item?'))
        if (results) {
            console.log(evt);
            // deletePantry(pantry.id).then(() => {
            //     getPantries()
            // })
        }
    };

    useEffect(() => {
        getPantries();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {pantries.map((pantry) => {
                    return (
                    <Card>
                        <CardBody>
                            <Button>
                            <Pantry pantry={pantry} key={pantry.id} />
                            </Button>
                        </CardBody>
                            <Button onClick={deleteSelectedPantry}>Delete</Button>
                    </Card>
                        // ^ pantry={pantry} is a prop, which allows the PantryList.js file to access objects/functions
                    )
                }
                    // react fragments ( <> </> ) can be used to group things together within a return 
                    //(can only return one within)- used because it doesnt style the way <div> does
                )}
        </div>
            {/* <Link to="/pantry/add">
                Create A New Pantry
            </Link> */}
        </div >
    );
};

export default PantryList;
//When the component loads, it will call the getAllTags function then
//set the state of the tag array and re-render to display a list of tag names.