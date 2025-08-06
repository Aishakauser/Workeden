import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ResumeMatcher from './pages/ResumeMatcher';
import Tracker from './pages/Tracker';
import JobFeed from './pages/JobFeed';
import Onboarding from './pages/Onboarding';
import AuthScreen from './pages/AuthScreen';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4"> {/* Bootstrap spacing */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume-matcher" element={<ResumeMatcher />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/job-feed" element={<JobFeed />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/auth" element={<AuthScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
