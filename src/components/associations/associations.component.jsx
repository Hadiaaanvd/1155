import React from "react";
import "./associations.styles.scss";
const Associations = () => {
  return (
    <div className="associations-component">
      <h2>President and CEO</h2>
      <div className="boxes-container">
        <div className="box">Vice President of Human Resources</div>
        <div className="box">
          <h1>Director of Program Management</h1>
        </div>
        <div className="box">Director of Assets</div>
        <div className="box">
          <h1>Vice President of Operations</h1>
        </div>
      </div>
      <div className="boxes-container">
        <div className="box">
          <h1>HR Specialist</h1>
        </div>
        <div className="box">Accounting Manager</div>
        <div className="box">
          <h1>Superintendent/ Field Supervisors</h1>
        </div>
        <div className="box">Estimating Engineer</div>
      </div>
      <div className="boxes-container">
        <div className="box">Director of Safety</div>
        <div className="box">
          <h1>Training Manager</h1>
        </div>

        <div className="double-box">Learn More</div>
      </div>
    </div>
  );
};

export default Associations;
