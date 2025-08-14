import { useEffect, useState } from 'react';
import { Booking } from '../features/c404/types';
import { getPlannerWeek } from '../features/c404/c404Api';

const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function startOfWeek(d: Date) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  date.setDate(date.getDate() + diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

function addDays(d: Date, days: number) {
  const date = new Date(d);
  date.setDate(date.getDate() + days);
  return date;
}

export default function WeekPlanner() {
  const [start, setStart] = useState(() => startOfWeek(new Date()));
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selected, setSelected] = useState<Booking | null>(null);

  useEffect(() => {
    getPlannerWeek(start.toISOString().split('T')[0]).then(setBookings);
  }, [start]);

  const handlePrev = () => setStart(s => addDays(s, -7));
  const handleNext = () => setStart(s => addDays(s, 7));

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(start, i));
  const todayIso = new Date().toISOString().split('T')[0];

  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="h6 m-0">My Planner</h2>
        <div>
          <button className="btn btn-sm btn-outline-secondary me-1" onClick={handlePrev} aria-label="Previous week">&lt;</button>
          <button className="btn btn-sm btn-outline-secondary" onClick={handleNext} aria-label="Next week">&gt;</button>
        </div>
      </div>
      <div className="card-body">
        <div className="row row-cols-7 g-2 d-none d-md-flex">
          {weekDays.map((day, idx) => {
            const iso = day.toISOString().split('T')[0];
            const dayBookings = bookings.filter(b => b.date === iso);
            return (
              <div className="col" key={idx}>
                <div className={'border rounded p-2 h-100 ' + (iso === todayIso ? 'bg-light' : '')}>
                  <div className="fw-semibold">{dayNames[idx]} {day.getDate()}</div>
                  {dayBookings.map(b => (
                    <button key={b.id} className="btn btn-link p-0 text-start" onClick={() => setSelected(b)} aria-label={`View ${b.site} booking`}>
                      {b.role} {b.start}-{b.end}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <ul className="list-group d-md-none">
          {weekDays.map((day, idx) => {
            const iso = day.toISOString().split('T')[0];
            const dayBookings = bookings.filter(b => b.date === iso);
            return (
              <li className="list-group-item" key={idx}>
                <div className="fw-semibold">{dayNames[idx]} {day.getDate()}</div>
                {dayBookings.map(b => (
                  <button key={b.id} className="btn btn-link p-0 text-start" onClick={() => setSelected(b)} aria-label={`View ${b.site} booking`}>
                    {b.role} {b.start}-{b.end}
                  </button>
                ))}
              </li>
            );
          })}
        </ul>
      </div>
      {selected && (
        <div className="offcanvas offcanvas-end show" style={{ visibility: 'visible' }}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">{selected.site}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setSelected(null)}></button>
          </div>
          <div className="offcanvas-body">
            <p><strong>{selected.role}</strong></p>
            <p>{selected.date} {selected.start}-{selected.end}</p>
            {selected.contactName && <p>Contact: {selected.contactName} {selected.contactPhone}</p>}
            <div className="d-grid gap-2">
              <button className="btn btn-secondary" aria-label="View instructions">View instructions</button>
              <a className="btn btn-primary" href={`/timesheets?prefill=${selected.id}`} aria-label="Submit timesheet">Submit timesheet</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
