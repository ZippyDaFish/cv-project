import React from "react";
import '../styles/Experience.css'

const Experience = (props) => {
    return(
        <div className="experience">
            <input
                onChange={props.doChange}
                type="text"
                id="companyInput"
                placeholder="Company Name"
            />
            <input
                onChange={props.doChange}
                type="text"
                id="positionInput"
                placeholder="Position Title"
            />
            <input
                onChange={props.doChange}
                type="textarea"
                id="taskInput"
                placeholder="Tasks"
            />
            <div>
                <input
                    onChange={props.doChange}
                    type="text"
                    id="startDateInput"
                    placeholder="Start Date"
                />
                <input
                    onChange={props.doChange}
                    type="text"
                    id="endDateInput"
                    placeholder="End Date"
                />
            </div>
        </div>
    );
};

export default Experience;