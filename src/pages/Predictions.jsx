import React, { useState } from "react";
import "./predictions.css";

export default function Predictions() {
  const [activeTab, setActiveTab] = useState("prediction");
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="predictions-page">
      {/* Header */}
      <header className="main-header">
        <h2>Predictive Maintenance</h2>
        <p>ML-based failure prediction and root cause analysis for your machines.</p>
      </header>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-link ${activeTab === "prediction" ? "active" : ""}`}
          onClick={() => setActiveTab("prediction")}
        >
          Prediction
        </button>

        <button
          className={`tab-link ${activeTab === "analysis" ? "active" : ""}`}
          onClick={() => setActiveTab("analysis")}
        >
          Analysis
        </button>

        <button
          className={`tab-link ${activeTab === "advanced" ? "active" : ""}`}
          onClick={() => setActiveTab("advanced")}
        >
          Advanced ML
        </button>
      </div>

      {/* ------------------------- */}
      {/* SCREEN 1: SETUP          */}
      {/* ------------------------- */}

      {!showResults && (
        <div id="analysis-setup-content">
          <div className="form-row">
            <div className="form-group">
              <label>Select Machine</label>
              <select className="form-select">
                <option>SSB1080</option>
                <option>SSB1081</option>
              </select>
            </div>

            <div className="form-group">
              <label>Forecast Window (Days)</label>
              <input className="form-input" type="number" defaultValue={30} />
            </div>

            <button
              className="btn-primary"
              id="run-analysis-btn"
              onClick={() => setShowResults(true)}
            >
              Run Analysis
            </button>
          </div>

          <div className="banner-card card">
            <span className="banner-card-text">
              <i className="fas fa-info-circle"></i>
              Phase 3 Ready for Deployment
            </span>
            <a className="banner-card-link">Activate Phase 3</a>
          </div>

          {/* Two column grid */}
          <div className="content-grid">
            {/* Failure Prediction */}
            <div className="card" id="failure-analysis">
              <div className="card-header">
                <h3>Failure Prediction Analysis</h3>
                <span className="status-tag high-risk">High Risk Detected</span>
              </div>

              <div className="card-body">
                <div className="inner-tabs">
                  <button className="inner-tab-link active">Predictions</button>
                  <button className="inner-tab-link">SHAP Analysis</button>
                </div>

                <div className="prediction-title">
                  <h4>Main Spindle Bearing</h4>
                  <i className="fas fa-exclamation-triangle icon-alert"></i>
                </div>

                <p className="prediction-probability">83%</p>
                <span>Failure probability</span>

                <div className="stats-grid">
                  <div className="stat-item">
                    <p>72-96 hours</p>
                    <span>Estimated time to failure</span>
                  </div>
                  <div className="stat-item">
                    <p>89%</p>
                    <span>Confidence score</span>
                  </div>
                  <div className="stat-item">
                    <p>High</p>
                    <span>Impact severity</span>
                  </div>
                  <div className="stat-item">
                    <p>Yes</p>
                    <span>Historical pattern</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Root Cause Analysis */}
            <div className="card" id="root-cause-analysis">
              <div className="card-header">
                <h3>Root Cause Analysis: Main Spindle Bearing</h3>
              </div>

              <div className="card-body">
                <div className="rca-header">
                  <span>Contributing Factor</span>
                  <span>Score</span>
                  <span>Trend</span>
                  <span>Description</span>
                </div>

                <div className="rca-item">
                  <p>Excessive Vibration at 120Hz</p>
                  <span className="score">86%</span>
                  <span className="trend-tag increasing">Increasing</span>
                  <span className="description">
                    Vibration amplitude at 120Hz has increased by 43% in the past 72 hours.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------- */}
      {/* SCREEN 2: RESULTS        */}
      {/* ------------------------- */}

      {showResults && (
        <div id="analysis-results-content">
          <div className="analysis-header">
            <h3>Analysis Results: SSB1080</h3>
            <span>30 Day Forecast</span>
          </div>

          <div className="results-grid">
            {/* LEFT COLUMN */}
            <div className="grid-col-left">
              {/* Machine Health */}
              <div className="card" id="machine-health">
                <div className="card-body">
                  <div className="health-index-header">
                    <h4>Machine Health Index</h4>
                    <span className="health-score">
                      78 <small>/ 100</small>
                    </span>
                  </div>

                  <div className="progress-bar-container">
                    <div className="progress-bar"></div>
                  </div>

                  <h4>Recommended Actions:</h4>
                  <ul className="recommendations-list">
                    <li>
                      <i className="fas fa-check-circle"></i> Schedule inspection of
                      spindle bearings...
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Monitor vibration
                      patterns...
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Reduce max operational
                      speed...
                    </li>
                  </ul>
                </div>
              </div>

              {/* Historical Context */}
              <div className="card">
                <div className="card-header">
                  <h3>Historical Context</h3>
                </div>

                <div className="card-body" style={{ padding: "0 0 12px 0" }}>
                  <table className="historical-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Pattern</th>
                        <th>Outcome</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>14/3/2025</td>
                        <td>Similar vibration pattern detected</td>
                        <td>Bearing replacement required...</td>
                      </tr>
                      <tr>
                        <td>22/9/2024</td>
                        <td>Temperature anomaly...</td>
                        <td>Preventive maintenance...</td>
                      </tr>

                      <tr className="warning-row">
                        <td colSpan="3">
                          <i className="fas fa-exclamation-triangle"></i>
                          Historical patterns indicate potential failure...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="grid-col-right">
              <div className="card" id="failure-probability">
                <div className="card-header">
                  <h3>Failure Probability</h3>
                </div>

                <div className="card-body">
                  {/* Add charts or bars here if needed */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="bottom-grid">
            <div className="card">
              <div className="card-header">
                <h3>Maintenance Planning</h3>
              </div>
              <div className="card-body small-card-content">
                <span>Est. Cost</span>
                <p>$2800</p>

                <span style={{ marginTop: "16px" }}>Downtime</span>
                <p>6-8 hours</p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3>Production Loss</h3>
              </div>
              <div className="card-body small-card-content">
                <span>Est. Units</span>
                <p>~240 units</p>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3>Scheduling</h3>
              </div>
              <div className="card-body small-card-content">
                <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  Schedule maintenance during weekend shift
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
