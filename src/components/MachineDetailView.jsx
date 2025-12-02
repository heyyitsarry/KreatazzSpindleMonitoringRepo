import React, { useState, useEffect, useMemo } from "react";
import SpindleView from "./SpindleView";
import SpindleSchematic2D from "./SpindleSchematic2D";
import SpindleSensorMap from "./SpindleSensorMap";
import "./MachineDetailView.css";

export default function MachineDetailView({ machine, onClose }) {
    const [view, setView] = useState("3d");
    const [timeRange, setTimeRange] = useState("1h"); // 1h, 6h, 24h

    // Sample sensor data for the selected machine
    const sensorData = [
        { id: 19251, timestamp: "2025-10-09 17:22:40", machine_id: "SSB1080", mist_pressure: 2.585, temp: 38.789, current: 23.928, speed: 16434.9, he4_de: 1.138, hv_de: 0.552, ha_de: 0.705, workhead_rpm: 300, grinding_time: 25 },
        { id: 19252, timestamp: "2025-10-09 17:22:41", machine_id: "SSB1080", mist_pressure: 2.590, temp: 38.810, current: 24.100, speed: 16435.1, he4_de: 1.139, hv_de: 0.553, ha_de: 0.706, workhead_rpm: 300, grinding_time: 25 },
        { id: 19253, timestamp: "2025-10-09 17:22:42", machine_id: "SSB1080", mist_pressure: 2.587, temp: 38.832, current: 23.991, speed: 16434.8, he4_de: 1.137, hv_de: 0.551, ha_de: 0.704, workhead_rpm: 300, grinding_time: 25 },
        { id: 19254, timestamp: "2025-10-09 17:22:43", machine_id: "SSB1081", mist_pressure: 2.105, temp: 41.200, current: 27.500, speed: 18000.0, he4_de: 1.400, hv_de: 0.610, ha_de: 0.810, workhead_rpm: 250, grinding_time: 30 },
        { id: 19255, timestamp: "2025-10-09 17:22:44", machine_id: "SSB1081", mist_pressure: 2.102, temp: 41.230, current: 27.580, speed: 18000.0, he4_de: 1.402, hv_de: 0.612, ha_de: 0.811, workhead_rpm: 250, grinding_time: 30 },
        { id: 19256, timestamp: "2025-10-09 17:22:45", machine_id: "SSB1081", mist_pressure: 2.099, temp: 41.261, current: 27.650, speed: 18000.0, he4_de: 1.403, hv_de: 0.613, ha_de: 0.812, workhead_rpm: 250, grinding_time: 30 },
        { id: 19257, timestamp: "2025-10-09 17:22:46", machine_id: "SSB1080", mist_pressure: 2.584, temp: 38.850, current: 23.931, speed: 16434.9, he4_de: 1.138, hv_de: 0.552, ha_de: 0.705, workhead_rpm: 300, grinding_time: 25 },
        { id: 19258, timestamp: "2025-10-09 17:22:47", machine_id: "SSB1080", mist_pressure: 2.585, temp: 38.871, current: 23.945, speed: 16435.0, he4_de: 1.138, hv_de: 0.552, ha_de: 0.705, workhead_rpm: 300, grinding_time: 25 },
        { id: 19259, timestamp: "2025-10-09 17:22:48", machine_id: "SSB1080", mist_pressure: 2.586, temp: 38.890, current: 24.005, speed: 16435.1, he4_de: 1.139, hv_de: 0.553, ha_de: 0.706, workhead_rpm: 300, grinding_time: 25 },
        { id: 19260, timestamp: "2025-10-09 17:22:49", machine_id: "SSB1081", mist_pressure: 2.100, temp: 41.290, current: 27.700, speed: 18000.0, he4_de: 1.405, hv_de: 0.615, ha_de: 0.814, workhead_rpm: 250, grinding_time: 30 },
        { id: 19261, timestamp: "2025-10-09 17:22:50", machine_id: "SSB1081", mist_pressure: 2.101, temp: 41.320, current: 27.750, speed: 18000.0, he4_de: 1.406, hv_de: 0.616, ha_de: 0.815, workhead_rpm: 250, grinding_time: 30 },
        { id: 19262, timestamp: "2025-10-09 17:22:51", machine_id: "SSB1082", mist_pressure: 2.300, temp: 39.500, current: 25.100, speed: 17000.0, he4_de: 1.200, hv_de: 0.580, ha_de: 0.750, workhead_rpm: 280, grinding_time: 28 },
        { id: 19263, timestamp: "2025-10-09 17:22:52", machine_id: "SSB1082", mist_pressure: 2.302, temp: 39.520, current: 25.120, speed: 17000.0, he4_de: 1.201, hv_de: 0.581, ha_de: 0.751, workhead_rpm: 280, grinding_time: 28 },
        { id: 19264, timestamp: "2025-10-09 17:22:53", machine_id: "SSB1080", mist_pressure: 2.585, temp: 38.910, current: 23.980, speed: 16434.9, he4_de: 1.138, hv_de: 0.552, ha_de: 0.705, workhead_rpm: 300, grinding_time: 25 },
        { id: 19265, timestamp: "2025-10-09 17:22:54", machine_id: "SSB1080", mist_pressure: 2.584, temp: 38.930, current: 23.950, speed: 16434.8, he4_de: 1.137, hv_de: 0.551, ha_de: 0.704, workhead_rpm: 300, grinding_time: 25 },
        { id: 19266, timestamp: "2025-10-09 17:22:55", machine_id: "SSB1081", mist_pressure: 2.098, temp: 41.350, current: 27.800, speed: 18000.0, he4_de: 1.408, hv_de: 0.618, ha_de: 0.817, workhead_rpm: 250, grinding_time: 30 },
        { id: 19267, timestamp: "2025-10-09 17:22:56", machine_id: "SSB1081", mist_pressure: 2.097, temp: 41.380, current: 27.830, speed: 18000.0, he4_de: 1.409, hv_de: 0.619, ha_de: 0.818, workhead_rpm: 250, grinding_time: 30 },
        { id: 19268, timestamp: "2025-10-09 17:22:57", machine_id: "SSB1082", mist_pressure: 2.305, temp: 39.550, current: 25.150, speed: 17000.0, he4_de: 1.203, hv_de: 0.583, ha_de: 0.753, workhead_rpm: 280, grinding_time: 28 },
        { id: 19269, timestamp: "2025-10-09 17:22:58", machine_id: "SSB1082", mist_pressure: 2.304, temp: 39.570, current: 25.140, speed: 17000.0, he4_de: 1.202, hv_de: 0.582, ha_de: 0.752, workhead_rpm: 280, grinding_time: 28 },
        { id: 19270, timestamp: "2025-10-09 17:22:59", machine_id: "SSB1080", mist_pressure: 2.585, temp: 38.950, current: 23.960, speed: 16434.9, he4_de: 1.138, hv_de: 0.552, ha_de: 0.705, workhead_rpm: 300, grinding_time: 25 },
    ];

    // Filter data for the selected machine
    const machineData = useMemo(() => {
        return sensorData.filter(d => d.machine_id === machine.id);
    }, [machine.id]);

    // Calculate statistics from machine data
    const stats = useMemo(() => {
        if (machineData.length === 0) return null;

        const latest = machineData[machineData.length - 1];
        const temps = machineData.map(d => d.temp);
        const currents = machineData.map(d => d.current);
        const speeds = machineData.map(d => d.speed);
        const he4 = machineData.map(d => d.he4_de);
        const hv = machineData.map(d => d.hv_de);
        const ha = machineData.map(d => d.ha_de);

        return {
            current: {
                temp: latest.temp.toFixed(2),
                current: latest.current.toFixed(2),
                speed: latest.speed.toFixed(1),
                mist_pressure: latest.mist_pressure.toFixed(3),
                workhead_rpm: latest.workhead_rpm,
                grinding_time: latest.grinding_time,
                he4_de: latest.he4_de.toFixed(3),
                hv_de: latest.hv_de.toFixed(3),
                ha_de: latest.ha_de.toFixed(3),
            },
            avg: {
                temp: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(2),
                current: (currents.reduce((a, b) => a + b, 0) / currents.length).toFixed(2),
                speed: (speeds.reduce((a, b) => a + b, 0) / speeds.length).toFixed(1),
            },
            min: {
                temp: Math.min(...temps).toFixed(2),
                current: Math.min(...currents).toFixed(2),
                speed: Math.min(...speeds).toFixed(1),
            },
            max: {
                temp: Math.max(...temps).toFixed(2),
                current: Math.max(...currents).toFixed(2),
                speed: Math.max(...speeds).toFixed(1),
            },
            dataPoints: machineData.length,
        };
    }, [machineData]);

    const getHealthStatus = (temp, vibration) => {
        if (temp > 40 || vibration > 1.4) return { status: "warning", label: "Warning", color: "#f59e0b" };
        if (temp > 42 || vibration > 1.5) return { status: "critical", label: "Critical", color: "#ef4444" };
        return { status: "healthy", label: "Healthy", color: "#22c55e" };
    };

    const health = stats ? getHealthStatus(parseFloat(stats.current.temp), parseFloat(stats.current.he4_de)) : { status: "unknown", label: "Unknown", color: "#6b7280" };

    return (
        <div className="machine-detail-overlay">
            <div className="machine-detail-container">
                {/* Header */}
                <div className="machine-detail-header">
                    <div className="header-left">
                        <h2>{machine.name}</h2>
                        <div className="machine-info">
                            <span className="machine-id">{machine.id}</span>
                            <span className="separator">•</span>
                            <span className="machine-model">{machine.model}</span>
                            <span className="separator">•</span>
                            <span className="machine-manufacturer">{machine.manufacturer}</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="health-badge" style={{ background: `${health.color}22`, color: health.color }}>
                            <span className="health-dot" style={{ background: health.color }}></span>
                            {health.label}
                        </div>
                        <button className="close-btn" onClick={onClose}>✕</button>
                    </div>
                </div>

                {/* Quick Stats */}
                {stats && (
                    <div className="quick-stats-grid">
                        <div className="quick-stat">
                            <div className="stat-label">Temperature</div>
                            <div className="stat-value">{stats.current.temp}°C</div>
                            <div className="stat-range">Avg: {stats.avg.temp}°C</div>
                        </div>
                        <div className="quick-stat">
                            <div className="stat-label">Current</div>
                            <div className="stat-value">{stats.current.current}A</div>
                            <div className="stat-range">Avg: {stats.avg.current}A</div>
                        </div>
                        <div className="quick-stat">
                            <div className="stat-label">Speed</div>
                            <div className="stat-value">{stats.current.speed} RPM</div>
                            <div className="stat-range">Avg: {stats.avg.speed} RPM</div>
                        </div>
                        <div className="quick-stat">
                            <div className="stat-label">Vibration HE4</div>
                            <div className="stat-value">{stats.current.he4_de} mm/s</div>
                            <div className="stat-range">Drive End</div>
                        </div>
                        <div className="quick-stat">
                            <div className="stat-label">Vibration HV</div>
                            <div className="stat-value">{stats.current.hv_de} mm/s</div>
                            <div className="stat-range">Drive End</div>
                        </div>
                        <div className="quick-stat">
                            <div className="stat-label">Vibration HA</div>
                            <div className="stat-value">{stats.current.ha_de} mm/s</div>
                            <div className="stat-range">Drive End</div>
                        </div>
                    </div>
                )}

                {/* Visualization Section */}
                <div className="visualization-section">
                    <div className="visualization-header">
                        <h3>Spindle Visualization</h3>
                        <div className="view-buttons">
                            <button
                                onClick={() => setView("3d")}
                                className={view === "3d" ? "active-btn" : ""}
                            >
                                3D View
                            </button>
                            <button
                                onClick={() => setView("2d")}
                                className={view === "2d" ? "active-btn" : ""}
                            >
                                2D Schematic
                            </button>
                            <button
                                onClick={() => setView("map")}
                                className={view === "map" ? "active-btn" : ""}
                            >
                                Sensor Map
                            </button>
                        </div>
                    </div>

                    <div className="visualization-content">
                        {view === "3d" && <SpindleView />}
                        {view === "2d" && <SpindleSchematic2D />}
                        {view === "map" && <SpindleSensorMap />}
                    </div>
                </div>

                {/* Data Table Section */}
                <div className="data-section">
                    <div className="data-header">
                        <h3>Recent Sensor Data ({machineData.length} records)</h3>
                        <div className="time-range-buttons">
                            <button className={timeRange === "1h" ? "active" : ""} onClick={() => setTimeRange("1h")}>1H</button>
                            <button className={timeRange === "6h" ? "active" : ""} onClick={() => setTimeRange("6h")}>6H</button>
                            <button className={timeRange === "24h" ? "active" : ""} onClick={() => setTimeRange("24h")}>24H</button>
                        </div>
                    </div>

                    <div className="data-table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Timestamp</th>
                                    <th>Temp (°C)</th>
                                    <th>Current (A)</th>
                                    <th>Speed (RPM)</th>
                                    <th>HE4 DE</th>
                                    <th>HV DE</th>
                                    <th>HA DE</th>
                                    <th>Mist Pressure</th>
                                    <th>Workhead RPM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {machineData.slice(-10).reverse().map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.timestamp}</td>
                                        <td>{row.temp.toFixed(2)}</td>
                                        <td>{row.current.toFixed(2)}</td>
                                        <td>{row.speed.toFixed(1)}</td>
                                        <td>{row.he4_de.toFixed(3)}</td>
                                        <td>{row.hv_de.toFixed(3)}</td>
                                        <td>{row.ha_de.toFixed(3)}</td>
                                        <td>{row.mist_pressure.toFixed(3)}</td>
                                        <td>{row.workhead_rpm}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
