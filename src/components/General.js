import React from "react";

const General = () => {
    return(
        <div>
            <label htmlFor="nameInput">Name: </label>
            <input 
                type="text"
                id="nameInput"
            />
            <label htmlFor="emailInput">Email: </label>
            <input
                type="text"
                id="emailInput"
            />
            <label htmlFor="phoneInput">Phone: </label>
            <input
                type="text"
                id="phoneInput"
            />
        </div>
    );
};

export default General;