import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css";

const Soda = () => {
    return (
        <div className="soda-container">
            <p>We all know which soda is better</p>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Soda;
