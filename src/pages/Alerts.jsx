import React from "react";
import "./alerts.css"; // we will create this CSS next

export default function Alerts() {
  return (
    <div className="alerts-page">
      
      {/* Header */}
      <header className="main-header">
        <div>
          <h2>Alerts</h2>
          <p>5 alerts found</p>
        </div>

        <div className="header-actions">
          <button className="btn btn-filter">
            Status: All Statuses <i className="fas fa-chevron-down"></i>
          </button>

          <button className="btn btn-filter">
            Severity: All Severities <i className="fas fa-chevron-down"></i>
          </button>

          <button className="btn btn-icon" title="Alert Settings">
            <i className="fas fa-sliders-h"></i>
          </button>

          <button className="btn btn-icon" title="Notification Preferences">
            <i className="fas fa-bell"></i>
          </button>
        </div>
      </header>

      {/* Recent Alerts Section */}
      <div className="alerts-section">
        <div className="section-header">
          <h3>Recent Alerts</h3>
          <a href="#" className="view-all-link">View All</a>
        </div>

        {/* Critical Alert */}
        <div className="alert-card critical">
          <div className="alert-icon">
            <i className="fas fa-exclamation-circle"></i>
          </div>

          <div className="alert-content">
            <h4>
              High Vibration Detected{" "}
              <span className="badge critical-badge">Critical</span>
            </h4>
            <p>
              CNC Mill #1 - Main Spindle. Spindle vibration exceeds threshold of
              4.0 mm/s. Current value: 4.8 mm/s. Check for potential bearing
              wear.
            </p>
          </div>

          <div className="alert-meta">
            <span className="timestamp">Today, 09:42 AM</span>
            <button className="btn btn-secondary">Acknowledge</button>
            <button className="btn btn-primary-outline">View Details</button>
          </div>
        </div>

        {/* Warning */}
        <div className="alert-card warning">
          <div className="alert-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>

          <div className="alert-content">
            <h4>
              Temperature Warning{" "}
              <span className="badge warning-badge">Warning</span>
            </h4>
            <p>
              Bearing temperature is approaching upper limit. Current: 65°C.
              Threshold: 70°C.
            </p>
          </div>

          <div className="alert-meta">
            <span className="timestamp">Today, 08:15 AM</span>
            <button className="btn btn-secondary">Acknowledge</button>
            <button className="btn btn-primary-outline">View Details</button>
          </div>
        </div>

        {/* Info */}
        <div className="alert-card info">
          <div className="alert-icon">
            <i className="fas fa-info-circle"></i>
          </div>

          <div className="alert-content">
            <h4>
              Machine Offline{" "}
              <span className="badge info-badge">Info</span>
            </h4>
            <p>
              Machine disconnected from monitoring network. Check connection or
              power status.
            </p>
          </div>

          <div className="alert-meta">
            <span className="timestamp">Yesterday, 04:30 PM</span>
            <button className="btn btn-primary-outline">View Details</button>
          </div>
        </div>
      </div>

      {/* Preventive Maintenance Section */}
      <div className="alerts-section">
        <div className="section-header">
          <h3>Preventive Maintenance Due</h3>
        </div>

        <div className="alert-card info">
          <div className="alert-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>

          <div className="alert-content">
            <h4>Scheduled Maintenance</h4>
            <p>
              Scheduled maintenance for CNC Mill #1 due in 5 days. Please
              schedule service appointment.
            </p>
          </div>

          <div className="alert-meta">
            <button className="btn btn-primary-outline">View Details</button>
          </div>
        </div>
      </div>

    </div>
  );
}
