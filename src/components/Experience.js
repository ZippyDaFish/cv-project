import React from "react";

const Experience = (props) => {
    return(
        <div>
            <input
                onChange={props.doChange}
                type="text"
                id="companyInput"
                placeholder="Company Name"
            />
            <label htmlFor="positionInput">Position: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="positionInput"
                placeholder="Position Title"
            />
            <label htmlFor="taskInput">Tasks: </label>
            <input
                onChange={props.doChange}
                type="textarea"
                id="taskInput"

            />
            <div>
                <label htmlFor="startDateInput">Start Date: </label>
                <input
                    onChange={props.doChange}
                    type="text"
                    id="startDateInput"
                />
                <label htmlFor="endDateInput">End Date: </label>
                <input
                    onChange={props.doChange}
                    type="text"
                    id="endDateInput"
                />
            </div>
        </div>
    );
};

export default Experience;