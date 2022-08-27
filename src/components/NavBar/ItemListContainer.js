import React from "react";
import '../NavBar/ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
        return (
            <div className="ItemListContainer">
                <h1>{greeting}</h1>
            </div>
        )
}

export default ItemListContainer;