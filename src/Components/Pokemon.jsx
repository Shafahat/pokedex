import React from 'react';
import './Pokemon.css'
const Pokemon = ({ id, name, image, type }) => {

    return (
        <div className={`thumb-container ${type}`}>
            <div className="pokemon-id">
                <small>#{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="pokemon-details">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
};

export default Pokemon;
