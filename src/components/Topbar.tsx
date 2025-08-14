import { Link } from "react-router-dom";
// Remove the CSS import
// import "./Topbar.css";

interface Props {
  notifications: number;
}

export default function Topbar({ notifications }: Props) {
  return (
    <nav
      className="navbar navbar-light bg-white border-bottom"
      style={{
        padding: "1rem 1rem",        
      }}
    >
      <button
        className="btn btn-outline-secondary d-md-none me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarMenu"
        aria-label="Open menu"
      >
        ☰
      </button>
      <form
        className="d-none d-md-inline-flex me-auto"
        role="search"
        aria-label="Search"
      >
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search input"
        />
      </form>
      <div className="ms-auto d-flex align-items-center gap-3">
        <button className="btn position-relative" aria-label="Notifications">
          <span role="img" aria-label="bell">
            🔔
          </span>
          {notifications > 0 && (
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {notifications}
            </span>
          )}
        </button>
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-label="User menu"
          >
            User
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <Link className="dropdown-item" to="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}