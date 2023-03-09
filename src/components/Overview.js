import React from "react";

const Overview = (props) => {
    const {info} = props;
    return(
        <div>
            <div id="generalInfo">
                <h2>General Info</h2>
                <p>Name: {info.nameInput}</p>
                <p>Email: {info.emailInput}</p>
                <p>Phone: {info.phoneInput}</p>
            </div>
            <div id="educationInfo">
                <h2>Education</h2>
                <p>School: {info.schoolInput}</p>
                <p>Subject: {info.subjectInput}</p>
                <p>Date: {info.dateInput}</p>
            </div>
            <div id="experienceInfo">
                <h2>Experience</h2>
                <p>Company: {info.companyInput}</p>
                <p>Position: {info.positionInput}</p>
                <p>Tasks: {info.taskInput}</p>
                <div>
                    <p>Start: {info.startDateInput}</p>
                    <p>End: {info.endDateInput}</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;