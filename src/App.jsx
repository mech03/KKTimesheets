import React from "react";
import Navbar from "./Components/Navbar";

function App() {
  const handleSignOut = () => {
    alert("Signing out...");
  };

  return (
    <>
      <Navbar username="John Doe" onSignOut={handleSignOut} />
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Employee Timesheet System</h1>
      </div>
    </>
  );
}

export default App;
