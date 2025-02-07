import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css"; 

const Chips = () => {
    return (
        <div className="chips-container">
            <p>"What do you call cheese that isn't yours? Nacho cheese!"</p>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Chips;
