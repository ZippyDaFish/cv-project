import React from "react";

const Education = (props) => {
    return(
        <div>
            <input
                onChange={props.doChange}
                type="text"
                id="schoolInput"
                placeholder="School"
            />
            <input
                onChange={props.doChange}
                type="text"
                id="subjectInput"
                placeholder="Subject"
            />
            <input
                onChange={props.doChange}
                type="text"
                id="dateInput"
                placeholder="Date"
            />
        </div>
    );
};

export default Education;