import React from "react";
import "./TimesheetDisplay.css";

export default function TimesheetDisplay({ data }) {
    if (!data || data.length === 0) {
      return <div className="no-data">No timesheets submitted yet.</div>;
    }
  
    return (
      <div className="timesheet-display-container">
        <h2>Submitted Timesheets</h2>
        <table className="timesheet-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>SU Name</th>
              <th>Start</th>
              <th>End</th>
              <th>Duration</th>
              <th>Shift Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.code}</td>
                <td>{entry.suName}</td>
                <td>{entry.startTime}</td>
                <td>{entry.endTime}</td>
                <td>{entry.duration}</td>
                <td>{entry.shiftType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
