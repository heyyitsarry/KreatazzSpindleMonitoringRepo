import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const nav = [
    { name: "Dashboard", to: "/", icon: "dashboard" },
    { name: "Machines", to: "/machines", icon: "machines" },
    { name: "Predictions", to: "/predictions", icon: "predictions" },
    { name: "Analytics", to: "/analytics", icon: "analytics" },
    { name: "Alerts", to: "/alerts", icon: "alerts" },
    { name: "Data", to: "/data", icon: "data" },
    { name: "Users", to: "/users", icon: "users" },
    { name: "Settings", to: "/settings", icon: "settings" },
  ];

  return (
    <aside
      className={`sidebar ${isExpanded ? "expanded" : ""} ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="sidebar-header">
        <div className="logo-icon">
          <svg viewBox="0 0 100 100" className="skf-logo">
            <text x="50" y="65" textAnchor="middle" className="logo-text-svg">SKF</text>
          </svg>
        </div>
        {isExpanded && <span className="logo-text">SpindleTwin</span>}
      </div>
      <nav className="sidebar-nav">
        {nav.map((n) => (
          <NavLink
            key={n.name}
            to={n.to}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
            title={n.name}
          >
            <span className={`nav-icon icon-${n.icon}`}></span>
            {isExpanded && <span className="nav-text">{n.name}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="profile-pic">MK</div>
        {isExpanded && (
          <div className="profile-info">
            <div className="profile-name">Mukul</div>
            <div className="profile-role">Manager</div>
          </div>
        )}
      </div>
    </aside>
  );
}
