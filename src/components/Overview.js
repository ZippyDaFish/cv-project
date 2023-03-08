import React from "react";

const Overview = (props) => {
    const {info} = props;
    return(
        <div>
            <div id="generalInfo">
                <p>{info.nameInput}</p>
                <p>{info.emailInput}</p>
                <p>{info.phoneInput}</p>
            </div>
            <div id="educationInfo">
                <p>{info.schoolInput}</p>
                <p>{info.subjectInput}</p>
                <p>{info.dateInput}</p>
            </div>
            <div id="experienceInfo">
                <p>{info.companyInput}</p>
                <p>{info.positionInput}</p>
                <p>{info.taskInput}</p>
                <div>
                    <p>{info.startDateInput}</p>
                    <p>{info.endDateInput}</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;