import React from "react";
import "./TimesheetDisplay.css";

export default function TimesheetDisplay({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return <p className="no-data">No timesheet submitted yet.</p>;
  }

  return (
    <div className="timesheet-display-container">
      <h2>Submitted Timesheet</h2>
      <table className="timesheet-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>SU Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Duration (hrs)</th>
            <th>Shift Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.code}</td>
            <td>{data.suName}</td>
            <td>{data.startTime}</td>
            <td>{data.endTime}</td>
            <td>{data.duration}</td>
            <td>{data.shiftType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
