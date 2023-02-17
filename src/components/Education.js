import React from "react";

const Education = () => {
    return(
        <div>
            <label htmlFor="schoolInput">School: </label>
            <input
                type="text"
                id="schoolInput"
            />
            <label htmlFor="subjectInput">Subject: </label>
            <input
                type="text"
                id="subjectInput"
            />
            <label htmlFor="dateInput">Date: </label>
            <input
                type="text"
                id="dateInput"
            />
        </div>
    );
};

export default Education;