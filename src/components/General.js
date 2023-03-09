import React from "react";
import '../styles/General.css'

const General = (props) => {
    return(
        <div className="general">
            <input
                onChange={props.doChange}
                type="text"
                id="nameInput"
                placeholder="Name"
            />
            <input
                onChange={props.doChange}
                type="text"
                id="emailInput"
                placeholder="email@email.com"
            />
            <input
                onChange={props.doChange}
                type="text"
                id="phoneInput"
                placeholder="123-456-7890"
            />
        </div>
    );
};

export default General;