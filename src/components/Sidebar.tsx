import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/c404/dashboard", label: "Dashboard" },
    { to: "/available-shifts", label: "Available Shifts" },
    { to: "/my-bookings", label: "My Bookings" },
    { to: "/timesheets", label: "Timesheets" },
    { to: "/messages", label: "Communications" },
    { to: "/payslips", label: "Payslips" },
    { to: "#", label: "Learning & Development" },
    { to: "#", label: "Reviews" },
    { to: "#", label: "Documents & Notes" },
    { to: "/profile-compliance", label: "Profile & Compliance" },
  ];

  return (
    <aside
      className="bg-light border-end flex-shrink-0"
      style={{
        width: "250px", 
        height: "100vh", 
        position: "sticky",
        top: 0, 
        overflowY: "auto", 
        padding: "0.8rem",
      }}
    >
      <div className="d-flex flex-column h-100">
        <div className="p-3 border-bottom d-md-none">
          <h5 id="sidebarMenuLabel">Menu</h5>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          {links.map((link) => (
            <li className="nav-item" key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
