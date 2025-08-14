import { BrowserRouter, Routes, Route } from 'react-router-dom';
import C404Dashboard from '../features/c404/C404Dashboard';
import AvailableShifts from '../Pages/AvailableShifts';
import MyBookings from '../Pages/MyBookings';
import TimesheetsC404 from '../Pages/TimesheetsC404';
import Messages from '../Pages/Messages';
import Payslips from '../Pages/Payslips';
import ProfileCompliance from '../Pages/ProfileCompliance';

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
