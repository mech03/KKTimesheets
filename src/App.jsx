import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TimesheetForm from "./Pages/TimesheetForm";
import TimesheetDisplay from "./Pages/TimesheetDisplay";

function App() {
  const handleSignOut = () => {
    alert("Signing out...");
  };

  const [submittedData, setSubmittedData] = useState([]);

  const handleTimesheetSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
  };

  return (
    <>
      <Navbar username="John Doe" onSignOut={handleSignOut} />
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px 20px",
          marginTop: "0",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <TimesheetForm onSubmit={handleTimesheetSubmit} />
        <TimesheetDisplay data={submittedData} />
      </div>
    </>
  );
}

export default App;
