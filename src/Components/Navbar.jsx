import React from "react";
import "./Navbar.css";

const Navbar = ({ username, onSignOut }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">C404</span>
        <ul className="navbar-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/workschedule">Work Schedule</a></li>
          <li><a href="/timesheet">Timesheet</a></li>
          <li><a href="/payslip">Payslip</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <span className="navbar-username">Hello, {username}</span>
        <button className="signout-btn" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
