export type Booking = {
  id: string;
  date: string; // ISO
  start: string; // "08:00"
  end: string; // "16:00"
  site: string;
  role: string; // e.g. "HCA"
  contactName?: string;
  contactPhone?: string;
};

export type ShiftAdvert = {
  id: string;
  site: string;
  role: string;
  date: string; // ISO
  start: string;
  end: string;
  distanceKm?: number;
};

export type TimesheetStatus = 'Awaiting Client' | 'Client Approved' | 'Finalised';

export type TimesheetRow = {
  id: string;
  date: string;
  site: string;
  hours: number;
  status: TimesheetStatus;
};

export type MessagePreview = {
  id: string;
  subject: string;
  lastFrom: string;
  lastAt: string; // ISO
  unread: boolean;
};

export type ComplianceSummary = {
  ok: number; warn: number; fail: number; // counts
  items: { name: string; status: 'OK'|'WARN'|'FAIL'; due?: string }[];
};

export type Payslip = {
  id: string;
  period: string; // "Jun 2025"
  url: string;
};
