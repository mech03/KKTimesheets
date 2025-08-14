import React, {useState} from "react";
import TimesheetDisplay from "../Components/TimesheetDisplay";
import TimesheetForm from "../Components/TimesheetForm";

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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "10px 20px",
        marginTop: "0",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <TimesheetForm onSubmit={handleTimesheetSubmit} />
      <TimesheetDisplay data={submittedData} />
    </div>
  );
}
