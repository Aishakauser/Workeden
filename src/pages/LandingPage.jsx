import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // optional, if we separate CSS

function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center text-white p-5 hero-section">
        <img src={logo} alt="Workeden Logo" width="200" />
        <h1 className="mt-4 fw-bold">Your Global Career Journey Starts Here</h1>
        <p className="mt-2">
          Workeden connects international students, recent graduates, and professionals with visa-friendly job opportunities worldwide.
        </p>
        <div className="mt-4">
          <Link to="/auth" className="btn btn-primary me-3">Sign Up for Free</Link>
          <Link to="/job-feed" className="btn btn-dark">Explore Jobs</Link>
        </div>
      </section>

      {/* Features */}
      <section className="features-section text-center py-5 bg-gradient-blue text-black">
        <h2 className="mb-5">Our Key Features</h2>
        <div className="row justify-content-center px-4">
          <div className="col-md-3 feature-card">
            <h4>🧭 </h4>
            <h5>Visa-Friendly Job Matching</h5>
            <p>Discover curated job listings from companies open to sponsoring international talent.</p>
          </div>
          <div className="col-md-3 feature-card">
            <h4>📄 </h4>
            <h5>Smart Resume Optimization</h5>
            <p>Get AI-powered resume tips tailored to job descriptions.</p>
          </div>
          <div className="col-md-3 feature-card">
            <h4>📊 </h4>
            <h5>Effortless Application Tracking</h5>
            <p>Track your job applications and interviews in one place.</p>
          </div>
        </div>
      </section>

      {/* Illustration + Text */}
      <section className="illustration-section d-flex align-items-center justify-content-center p-5 bg-orange">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-4268475-3551766.png"
          alt="Team illustration"
          width="400"
          className="me-4"
        />
        <div>
          <h4 className="fw-bold mb-3">Simplify Your International Job Search</h4>
          <ul>
            <li>Access visa-sponsored roles</li>
            <li>Tailor your applications for impact</li>
            <li>Stay organized and never miss an opportunity</li>
            <li>Connect with a community of global talent</li>
          </ul>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center p-4 bg-yellow text-dark">
        <h5 className="fw-bold">Ready to Find Your Global Opportunity?</h5>
        <Link to="/auth" className="btn btn-primary mt-2">Join Workeden Today →</Link>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>Made with 💙 by Workeden | <Link to="/support" className="text-light">Support</Link> | <Link to="/legal" className="text-light">Legal</Link></small>
      </footer>
    </div>
  );
}

export default LandingPage;
