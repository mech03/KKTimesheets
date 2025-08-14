import React, { useState } from "react";
import "./TimesheetForm.css"; 

export default function TimesheetForm({onSubmit}) {
  const [formData, setFormData] = useState({
    code: "",
    suName: "",
    startTime: "",
    endTime: "",
    duration: "",
    shiftType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Timesheet Data:", formData);
    alert("Timesheet submitted!");
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="timesheet-container">
      <h2>Timesheet Sample</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Code:
          <input
            type="text"
            name="code"
            placeholder="304"
            value={formData.code}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          SU Name:
          <input
            type="text"
            name="suName"
            placeholder="Sophie"
            value={formData.suName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Duration (hours):
          <input
            type="number"
            name="duration"
            placeholder="5"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Select Option:
          <select
            name="shiftType"
            value={formData.shiftType}
            onChange={handleChange}
            required
          >
            <option value="">--Choose--</option>
            <option value="N/A">N/A</option>
            <option value="Sleep in">Sleep in</option>
            <option value="Waking night">Waking night</option>
          </select>
        </label>

        <button type="submit">Submit Timesheet</button>
      </form>
    </div>
  );
}
