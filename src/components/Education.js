import React from "react";

const Education = (props) => {
    return(
        <div>
            <label htmlFor="schoolInput">School: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="schoolInput"
            />
            <label htmlFor="subjectInput">Subject: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="subjectInput"
            />
            <label htmlFor="dateInput">Date: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="dateInput"
            />
        </div>
    );
};

export default Education;