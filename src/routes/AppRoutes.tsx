import { BrowserRouter, Routes, Route } from 'react-router-dom';
import C404Dashboard from '../features/c404/C404Dashboard';
import AvailableShifts from '../pages/AvailableShifts';
import MyBookings from '../pages/MyBookings';
import TimesheetsC404 from '../pages/TimesheetsC404';
import Messages from '../pages/Messages';
import Payslips from '../pages/Payslips';
import ProfileCompliance from '../pages/ProfileCompliance';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/c404/dashboard" element={<C404Dashboard />} />
        <Route path="/available-shifts" element={<AvailableShifts />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/my-bookings/:id" element={<MyBookings />} />
        <Route path="/timesheets" element={<TimesheetsC404 />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/profile-compliance" element={<ProfileCompliance />} />
        <Route path="*" element={<C404Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
