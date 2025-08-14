import React, { useState } from "react";
import TimesheetDisplay from "../components/TimesheetDisplay";
import TimesheetForm from "../components/TimesheetForm";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

interface TimesheetData {
  code: string;
  suName: string;
  startTime: string;
  endTime: string;
  duration: string;
  shiftType: string;
}

export default function TimesheetsC404() {
  const [submittedData, setSubmittedData] = useState<TimesheetData[]>([]);

  const handleTimesheetSubmit = (data: TimesheetData) => {
    setSubmittedData((prevData) => [...prevData, data]);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar notifications={submittedData.length} />
        <main className="container-fluid py-3">
          <h1 className="h4 mb-3">C404 Timesheet</h1>
          <div className="row g-3">
            <div className="col-12 col-lg-4">
              <TimesheetForm onSubmit={handleTimesheetSubmit} />
            </div>
            <div className="col-12 col-lg-8">
              <div className="table-responsive">
                <TimesheetDisplay data={submittedData} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
