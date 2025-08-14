import React, { useState, ChangeEvent, FormEvent } from "react";
import "../Pages/TimesheetForm.css";

interface TimesheetData {
  code: string;
  suName: string;
  startTime: string;
  endTime: string;
  duration: string;
  shiftType: string;
}

interface TimesheetFormProps {
  onSubmit?: (data: TimesheetData) => void;
}

export default function TimesheetForm({ onSubmit }: TimesheetFormProps) {
  const [formData, setFormData] = useState<TimesheetData>({
    code: "",
    suName: "",
    startTime: "",
    endTime: "",
    duration: "",
    shiftType: ""
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
