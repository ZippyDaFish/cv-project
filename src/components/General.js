import React from "react";
import '../styles/General.css'

const General = (props) => {
    return(
        <div className="general">
            <label htmlFor="nameInput">Name: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="nameInput"
            />
            <label htmlFor="emailInput">Email: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="emailInput"
            />
            <label htmlFor="phoneInput">Phone: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="phoneInput"
            />
        </div>
    );
};

export default General;