import React from "react";
import "../Pages/TimesheetDisplay.css";

interface TimesheetData {
  code: string;
  suName: string;
  startTime: string;
  endTime: string;
  duration: string;
  shiftType: string;
}

interface TimesheetDisplayProps {
  data?: TimesheetData[];
}

export default function TimesheetDisplay({ data }: TimesheetDisplayProps) {
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
