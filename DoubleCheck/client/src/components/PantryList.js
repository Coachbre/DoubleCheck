import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CardBody, Card } from "reactstrap";
import PantryCard from './PantryCard';
import { getByUser, deletePantry } from "../modules/pantryManager";
import './styling/pantryList.css';

const PantryList = () => {
    const [pantries, setPantries] = useState([]);

    const getPantries = () => {
        getByUser().then(pantries => setPantries(pantries));
    };


    const deleteSelectedPantry = () => {
        var results = (window.confirm('Delete the item?'))
        if (results) {
            // deletePantry(pantry.id).then(() => {
            //     getPantries()
            // })
        }
    };

    useEffect(() => {
        getPantries();
    }, []);

    return (
        <>
        <body>
            <h3>Check whats in your kitchen!</h3>
        <div className="pantryList">
        <div className="container">
            <div className="row justify-content-center">
                {pantries.map((pantry) => {
                    return (
                        <Card>
                                <CardBody>
                            <Link to={`/${pantry.id}`}>
                                    <PantryCard pantry={pantry} key={pantry.id} />
                            </Link>
                                </CardBody>
                            {/* <Button onClick={deleteSelectedPantry}>Delete</Button> */}
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
        </div>
        </body>
        </>
    );
};

export default PantryList;
//When the component loads, it will call the getAllTags function then
//set the state of the tag array and re-render to display a list of tag names.