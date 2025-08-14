import React from "react";
import Navbar from "./Components/Navbar";
import Timesheet from "./Pages/Timesheet";

function App() {
  const handleSignOut = () => {
    alert("Signing out...");
  };

  return (
    <>
      <div>
        <Navbar username="John Doe" onSignOut={handleSignOut} />
        <Timesheet />
      </div>
    </>
  );
}

export default App;
