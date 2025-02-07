import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div>
        <div>
            <p>WELCOME TO MY VENDING MACHINE. WOULD WOULD YOU LIKE?</p>
        </div>

        <div>
        <Link to="/soda">SODA</Link>
        <Link to="/chips">CHIPS</Link>
        <Link to="/proteinbar">PROTEIN BAR</Link>
        </div>    
    </div>
  );
};

export default VendingMachine;
