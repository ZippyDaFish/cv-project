import React from "react";

const General = (props) => {
    return(
        <div>
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