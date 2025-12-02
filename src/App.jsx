import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import Alerts from "./pages/Alerts";
import Predictions from "./pages/Predictions";
import Data from "./pages/Data";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <main className="main-content">
          {/* Mobile Menu Button */}
          <button
            className="menu-toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-icon"></span>
          </button>

          <Routes>

            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Machines Page */}
            <Route path="/machines" element={<Machines />} />

            {/* Alerts Page */}
            <Route path="/alerts" element={<Alerts />} />

            {/* Predictions Page */}
            <Route path="/predictions" element={<Predictions />} />

            {/* Data Page */}
            <Route path="/data" element={<Data />} />

            {/* Fallback */}
            <Route
              path="*"
              element={
                <div className="page-placeholder">
                  Page under construction
                </div>
              }
            />
          </Routes>
        </main>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
