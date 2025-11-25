import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import Alerts from "./pages/Alerts";
import Predictions from "./pages/Predictions";
import DataPage from "./pages/Data";    // ⬅️ Added Data page

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <main className="main-content">
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
            <Route path="/data" element={<DataPage />} />

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
      </div>
    </BrowserRouter>
  );
}
