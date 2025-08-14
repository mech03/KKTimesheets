import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import DashboardCard from '../../components/DashboardCard';
import WeekPlanner from '../../components/WeekPlanner';
import {
  Booking,
  ShiftAdvert,
  MessagePreview,
  ComplianceSummary,
  Payslip,
} from './types';
import {
  getNextBooking,
  getShiftAdverts,
  getTimesheetSummary,
  getMessagePreviews,
  getComplianceSummary,
  getRecentPayslips,
} from './c404Api';

export default function C404Dashboard() {
  const [nextBooking, setNextBooking] = useState<Booking | null>(null);
  const [adverts, setAdverts] = useState<ShiftAdvert[]>([]);
  const [timesheets, setTimesheets] = useState({ awaitingClient: 0, clientApproved: 0, finalised: 0 });
  const [messages, setMessages] = useState<MessagePreview[]>([]);
  const [compliance, setCompliance] = useState<ComplianceSummary | null>(null);
  const [payslips, setPayslips] = useState<Payslip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [nb, sh, ts, msg, comp, pay] = await Promise.all([
        getNextBooking(),
        getShiftAdverts(3),
        getTimesheetSummary(),
        getMessagePreviews(3),
        getComplianceSummary(),
        getRecentPayslips(2),
      ]);
      setNextBooking(nb);
      setAdverts(sh);
      setTimesheets(ts);
      setMessages(msg);
      setCompliance(comp);
      setPayslips(pay);
      setLoading(false);
    })();
  }, []);

  const handleAccept = (id: string) => {
    setAdverts(a => a.filter(s => s.id !== id));
  };

  if (loading) {
    return <div className="p-3">Loading...</div>;
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar notifications={timesheets.awaitingClient} />
        <main className="container-fluid py-3">
          <h1 className="h4 mb-3">C404 Dashboard</h1>
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <DashboardCard
                title="My Next Booking"
                actionLabel="View details"
                actionTo={nextBooking ? `/my-bookings/${nextBooking.id}` : '/my-bookings'}
              >
                {nextBooking ? (
                  <div>
                    <div>{nextBooking.date} {nextBooking.start}-{nextBooking.end}</div>
                    <div>{nextBooking.site}</div>
                    <div>{nextBooking.role}</div>
                  </div>
                ) : (
                  <div>No bookings yet — check Available Shifts</div>
                )}
              </DashboardCard>
            </div>
            <div className="col-12 col-md-4">
              <DashboardCard title="Available Shifts near me" actionLabel="View all" actionTo="/available-shifts">
                {adverts.length ? (
                  <ul className="list-unstyled mb-0">
                    {adverts.map(ad => (
                      <li key={ad.id} className="mb-2">
                        <div>{ad.site} - {ad.role}</div>
                        <div>{ad.date} {ad.start}-{ad.end}</div>
                        <button
                          className="btn btn-sm btn-success mt-1"
                          onClick={() => handleAccept(ad.id)}
                          aria-label={`Accept shift at ${ad.site}`}
                        >
                          Accept
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>No shifts available today. Try changing filters.</div>
                )}
              </DashboardCard>
            </div>
            <div className="col-12 col-md-4">
              <DashboardCard title="Approvals status" actionLabel="View" actionTo="/timesheets">
                <div className="d-flex flex-column gap-1">
                  <Link to="/timesheets?status=Awaiting%20Client" className="text-decoration-none" aria-label="Awaiting client timesheets">
                    {timesheets.awaitingClient} Awaiting client
                  </Link>
                  <Link to="/timesheets?status=Client%20Approved" className="text-decoration-none" aria-label="Client approved timesheets">
                    {timesheets.clientApproved} Approved
                  </Link>
                  <Link to="/timesheets?status=Finalised" className="text-decoration-none" aria-label="Finalised timesheets">
                    {timesheets.finalised} Finalised
                  </Link>
                </div>
              </DashboardCard>
            </div>
            <div className="col-12">
              <WeekPlanner />
            </div>
            <div className="col-12 col-md-4">
              <DashboardCard title="Messages" actionLabel="Open inbox" actionTo="/messages">
                {messages.length ? (
                  <ul className="list-unstyled mb-0">
                    {messages.map(m => (
                      <li key={m.id} tabIndex={0} className="mb-2" aria-label={m.subject}>
                        <span className={m.unread ? 'fw-bold' : ''}>{m.subject}</span>
                        <div className="small text-muted">{m.lastFrom}</div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>No messages</div>
                )}
              </DashboardCard>
            </div>
            <div className="col-12 col-md-4">
              <DashboardCard title="Compliance status" actionLabel="Update docs" actionTo="/profile-compliance">
                {compliance && (
                  <div>
                    <span className="badge bg-success me-1" aria-label={`OK ${compliance.ok}`}>OK {compliance.ok}</span>
                    <span className="badge bg-warning text-dark me-1" aria-label={`WARN ${compliance.warn}`}>WARN {compliance.warn}</span>
                    <span className="badge bg-danger" aria-label={`FAIL ${compliance.fail}`}>FAIL {compliance.fail}</span>
                  </div>
                )}
              </DashboardCard>
            </div>
            <div className="col-12 col-md-4">
              <DashboardCard title="Recent payslips" actionLabel="View all" actionTo="/payslips">
                {payslips.length ? (
                  <ul className="list-unstyled mb-0">
                    {payslips.map(p => (
                      <li key={p.id}><a href={p.url}>{p.period}</a></li>
                    ))}
                  </ul>
                ) : (
                  <div>No payslips</div>
                )}
              </DashboardCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
