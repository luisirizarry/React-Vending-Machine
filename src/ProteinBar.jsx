import React from "react";
import { Link } from "react-router-dom";
import "./ProteinBar.css";

const ProteinBar = () => {
    return (
        <div className="proteinbar-container">
            <p>"What did the protein bar say to the gym bro? Let's get pumped!"</p>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default ProteinBar;
