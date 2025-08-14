import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TimesheetForm from "./Pages/TimesheetForm";
import TimesheetDisplay from "./Pages/TimesheetDisplay";

function App() {
  const handleSignOut = () => {
    alert("Signing out...");
  };

  const [submittedData, setSubmittedData] = useState({});

  return (
    <>
      <Navbar username="John Doe" onSignOut={handleSignOut} />
      <div style={{paddingLeft: 20}}>
        <TimesheetForm onSubmit={(data) => setSubmittedData(data)} />
        <TimesheetDisplay data={submittedData} />
      </div>
    </>
  );
}

export default App;
