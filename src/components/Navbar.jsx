import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Workeden</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume-matcher">Resume Matcher</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tracker">Tracker</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job-feed">Job Feed</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/onboarding">Onboarding</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auth">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

