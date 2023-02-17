import React from "react";

const Experience = () => {
    return(
        <div>
            <label htmlFor="companyInput">Company: </label>
            <input
                type="text"
                id="companyInput"
            />
            <label htmlFor="positionInput">Position: </label>
            <input
                type="text"
                id="positionInput"
            />
            <label htmlFor="taskInput">Tasks: </label>
            <input
                type="text"
                id="taskInput"
            />
            <div>
                <label htmlFor="startDateInput">Start Date: </label>
                <input
                    type="text"
                    id="startDateInput"
                />
                <label htmlFor="endDateInput">End Date: </label>
                <input
                    type="text"
                    id="endDateInput"
                />
            </div>
        </div>
    );
};

export default Experience;