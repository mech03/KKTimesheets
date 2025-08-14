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
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        <TimesheetForm onSubmit={handleTimesheetSubmit} />
        <TimesheetDisplay data={submittedData} />
      </div>
    </>
  );
}

export default App;
