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