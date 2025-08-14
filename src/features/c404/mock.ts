import { Booking, ShiftAdvert, MessagePreview, ComplianceSummary, Payslip, TimesheetRow } from './types';

export const nextBooking: Booking = {
  id: 'b1',
  date: new Date().toISOString().split('T')[0],
  start: '08:00',
  end: '16:00',
  site: 'Sunrise Care Home',
  role: 'HCA',
  contactName: 'Alice Manager',
  contactPhone: '0123456789',
};

export const shiftAdverts: ShiftAdvert[] = [
  { id: 's1', site: 'Oakview Hospital', role: 'RN', date: new Date().toISOString().split('T')[0], start: '09:00', end: '17:00', distanceKm: 5 },
  { id: 's2', site: 'Maple Lodge', role: 'HCA', date: new Date(Date.now()+86400000).toISOString().split('T')[0], start: '07:00', end: '15:00', distanceKm: 8 },
  { id: 's3', site: 'Elm Clinic', role: 'HCA', date: new Date(Date.now()+2*86400000).toISOString().split('T')[0], start: '20:00', end: '08:00', distanceKm: 12 },
];

export const timesheetRows: TimesheetRow[] = [
  { id: 't1', date: new Date().toISOString().split('T')[0], site: 'Sunrise Care Home', hours: 8, status: 'Awaiting Client' },
  { id: 't2', date: new Date(Date.now()-86400000).toISOString().split('T')[0], site: 'Oakview Hospital', hours: 8, status: 'Client Approved' },
  { id: 't3', date: new Date(Date.now()-2*86400000).toISOString().split('T')[0], site: 'Maple Lodge', hours: 8, status: 'Finalised' },
];

export const messagePreviews: MessagePreview[] = [
  { id: 'm1', subject: 'Shift confirmation', lastFrom: 'Scheduler', lastAt: new Date().toISOString(), unread: true },
  { id: 'm2', subject: 'Policy update', lastFrom: 'HR', lastAt: new Date(Date.now()-86400000).toISOString(), unread: false },
  { id: 'm3', subject: 'Payslip ready', lastFrom: 'Payroll', lastAt: new Date(Date.now()-2*86400000).toISOString(), unread: false },
];

export const complianceSummary: ComplianceSummary = {
  ok: 3,
  warn: 1,
  fail: 1,
  items: [
    { name: 'DBS', status: 'OK' },
    { name: 'Immunisation', status: 'WARN', due: new Date(Date.now()+30*86400000).toISOString() },
    { name: 'Training', status: 'FAIL' },
    { name: 'Right to Work', status: 'OK' },
    { name: 'References', status: 'OK' },
  ],
};

export const payslips: Payslip[] = [
  { id: 'p1', period: 'Jun 2025', url: '#' },
  { id: 'p2', period: 'May 2025', url: '#' },
];

export const timesheetSummary = {
  awaitingClient: 1,
  clientApproved: 1,
  finalised: 1,
};
