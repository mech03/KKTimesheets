import React, { useState, ChangeEvent, FormEvent } from "react";

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
    if (onSubmit) onSubmit(formData);
    console.log("Timesheet Data:", formData);
  };

  return (
    <div className="card shadow-sm"> 
      <div className="card-body">
        <h5 className="card-title mb-3">Submit Timesheet</h5>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div>
            <label className="form-label">Code</label>
            <input
              type="text"
              name="code"
              placeholder="304"
              value={formData.code}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div>
            <label className="form-label">SU Name</label>
            <input
              type="text"
              name="suName"
              placeholder="Sophie"
              value={formData.suName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div>
            <label className="form-label">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div>
            <label className="form-label">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div>
            <label className="form-label">Duration (hours)</label>
            <input
              type="number"
              name="duration"
              placeholder="5"
              value={formData.duration}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div>
            <label className="form-label">Shift Type</label>
            <select
              name="shiftType"
              value={formData.shiftType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">--Choose--</option>
              <option value="N/A">N/A</option>
              <option value="Sleep in">Sleep in</option>
              <option value="Waking night">Waking night</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Timesheet
          </button>
        </form>
      </div>
    </div>
  );
}