import {
  Booking,
  ShiftAdvert,
  MessagePreview,
  ComplianceSummary,
  Payslip,
} from './types';
import {
  nextBooking,
  shiftAdverts,
  timesheetSummary,
  messagePreviews,
  complianceSummary,
  payslips,
  timesheetRows,
} from './mock';

export function getNextBooking(): Promise<Booking | null> {
  return Promise.resolve(nextBooking);
}

export function getShiftAdverts(limit = 3): Promise<ShiftAdvert[]> {
  return Promise.resolve(shiftAdverts.slice(0, limit));
}

export function getTimesheetSummary(): Promise<{ awaitingClient: number; clientApproved: number; finalised: number; }> {
  return Promise.resolve(timesheetSummary);
}

export function getPlannerWeek(startIso: string): Promise<Booking[]> {
  // For mock just return bookings for the week ignoring start
  return Promise.resolve([nextBooking, ...timesheetRows.map(r => ({
    id: r.id,
    date: r.date,
    start: '08:00',
    end: '16:00',
    site: r.site,
    role: 'HCA',
  }))]);
}

export function getMessagePreviews(limit = 3): Promise<MessagePreview[]> {
  return Promise.resolve(messagePreviews.slice(0, limit));
}

export function getComplianceSummary(): Promise<ComplianceSummary> {
  return Promise.resolve(complianceSummary);
}

export function getRecentPayslips(limit = 2): Promise<Payslip[]> {
  return Promise.resolve(payslips.slice(0, limit));
}
