import React from "react";

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
  return (
    <div className="card shadow-sm"> 
      <div className="card-body">
        <h5 className="card-title mb-3">Submitted Timesheets</h5>
        {(!data || data.length === 0) ? (
          <div className="text-muted">No timesheets submitted yet.</div>
        ) : (
          <div className="table-responsive"> 
            <table className="table table-bordered table-striped align-middle table-sm">
              <thead className="table-light">
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
        )}
      </div>
    </div>
  );
}