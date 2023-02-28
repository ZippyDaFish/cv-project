import React from "react";

const Experience = (props) => {
    return(
        <div>
            <label htmlFor="companyInput">Company: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="companyInput"
            />
            <label htmlFor="positionInput">Position: </label>
            <input
                onChange={props.doChange}
                type="text"
                id="positionInput"
            />
            <label htmlFor="taskInput">Tasks: </label>
            <input
                onChange={props.doChange}
                type="text"
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