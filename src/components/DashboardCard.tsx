import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  children: ReactNode;
  actionLabel?: string;
  actionTo?: string;
}

export default function DashboardCard({ title, children, actionLabel, actionTo }: Props) {
  return (
    <div className="card h-100">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2 className="h6 m-0">{title}</h2>
        {actionLabel && actionTo && (
          <Link to={actionTo} className="btn btn-sm btn-primary" aria-label={actionLabel}>
            {actionLabel}
          </Link>
        )}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
