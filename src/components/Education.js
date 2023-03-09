import React from "react";
import '../styles/Education.css'

const Education = (props) => {
    return(
        <div className="education">
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