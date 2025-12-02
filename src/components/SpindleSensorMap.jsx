import React, { useState, useEffect } from "react";
import "./SpindleSensorMap.css";

export default function SpindleSensorMap() {
    const [sensors, setSensors] = useState({
        temperature: { value: 38.8, status: "normal", unit: "°C" },
        current: { value: 23.9, status: "normal", unit: "A" },
        speed: { value: 16435, status: "normal", unit: "RPM" },
        vibration_he4: { value: 1.138, status: "normal", unit: "mm/s" },
        vibration_hv: { value: 0.552, status: "warning", unit: "mm/s" },
        vibration_ha: { value: 0.705, status: "normal", unit: "mm/s" },
        mistPressure: { value: 2.585, status: "normal", unit: "bar" },
        workheadRPM: { value: 300, status: "normal", unit: "RPM" },
    });

    // Simulate real-time sensor updates
    useEffect(() => {
        const interval = setInterval(() => {
            setSensors(prev => ({
                temperature: {
                    ...prev.temperature,
                    value: (38.5 + Math.random() * 0.6).toFixed(2),
                    status: prev.temperature.value > 40 ? "warning" : "normal"
                },
                current: {
                    ...prev.current,
                    value: (23.5 + Math.random() * 1).toFixed(2)
                },
                speed: {
                    ...prev.speed,
                    value: Math.floor(16430 + Math.random() * 10)
                },
                vibration_he4: {
                    ...prev.vibration_he4,
                    value: (1.13 + Math.random() * 0.02).toFixed(3)
                },
                vibration_hv: {
                    ...prev.vibration_hv,
                    value: (0.55 + Math.random() * 0.01).toFixed(3),
                    status: prev.vibration_hv.value > 0.6 ? "warning" : "normal"
                },
                vibration_ha: {
                    ...prev.vibration_ha,
                    value: (0.70 + Math.random() * 0.02).toFixed(3)
                },
                mistPressure: {
                    ...prev.mistPressure,
                    value: (2.58 + Math.random() * 0.01).toFixed(3)
                },
                workheadRPM: {
                    ...prev.workheadRPM,
                    value: 300
                },
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const getSensorClass = (status) => {
        return `sensor-indicator ${status}`;
    };

    return (
        <div className="sensor-map-container">
            <div className="sensor-map-title">
                <h3>Spindle Sensor Map - Live Monitoring</h3>
                <span className="live-indicator">● LIVE</span>
            </div>

            <div className="sensor-map-diagram">
                <svg viewBox="0 0 900 450" className="sensor-svg">
                    {/* Spindle Body - Horizontal */}
                    <rect x="100" y="150" width="700" height="150" fill="#e8e8e8" stroke="#666" strokeWidth="3" rx="10" />

                    {/* Shaft (rotating) */}
                    <rect x="120" y="190" width="660" height="70" fill="#b0b0b0" stroke="#555" strokeWidth="2" />
                    <text x="450" y="230" textAnchor="middle" fill="#333" fontSize="14" fontWeight="600">Rotating Shaft</text>

                    {/* Bearing Housing Left */}
                    <rect x="150" y="140" width="80" height="170" fill="#ffd93d" stroke="#d4af37" strokeWidth="2" />

                    {/* Bearing Housing Right */}
                    <rect x="670" y="140" width="80" height="170" fill="#ffd93d" stroke="#d4af37" strokeWidth="2" />

                    {/* Temperature Sensor - Top Center */}
                    <circle cx="450" cy="120" r="15" className={getSensorClass(sensors.temperature.status)} />
                    <text x="450" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">T</text>
                    <line x1="450" y1="135" x2="450" y2="150" stroke="#333" strokeWidth="2" />

                    {/* Current Sensor - Left Side */}
                    <circle cx="250" cy="225" r="15" className={getSensorClass(sensors.current.status)} />
                    <text x="250" y="230" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">I</text>
                    <line x1="235" y1="225" x2="220" y2="225" stroke="#333" strokeWidth="2" />

                    {/* Speed Sensor - Right Side */}
                    <circle cx="650" cy="225" r="15" className={getSensorClass(sensors.speed.status)} />
                    <text x="650" y="230" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">S</text>
                    <line x1="665" y1="225" x2="680" y2="225" stroke="#333" strokeWidth="2" />

                    {/* Vibration HE4 Sensor - Left Bearing */}
                    <circle cx="190" cy="160" r="15" className={getSensorClass(sensors.vibration_he4.status)} />
                    <text x="190" y="165" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HE4</text>

                    {/* Vibration HV Sensor - Left Bearing Bottom */}
                    <circle cx="190" cy="290" r="15" className={getSensorClass(sensors.vibration_hv.status)} />
                    <text x="190" y="295" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HV</text>

                    {/* Vibration HA Sensor - Right Bearing */}
                    <circle cx="710" cy="225" r="15" className={getSensorClass(sensors.vibration_ha.status)} />
                    <text x="710" y="230" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HA</text>

                    {/* Mist Pressure Sensor - Top Left */}
                    <circle cx="350" cy="120" r="15" className={getSensorClass(sensors.mistPressure.status)} />
                    <text x="350" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">P</text>
                    <line x1="350" y1="135" x2="350" y2="150" stroke="#333" strokeWidth="2" />

                    {/* Workhead RPM - Bottom */}
                    <circle cx="550" cy="330" r="15" className={getSensorClass(sensors.workheadRPM.status)} />
                    <text x="550" y="335" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">W</text>
                    <line x1="550" y1="315" x2="550" y2="300" stroke="#333" strokeWidth="2" />
                </svg>
            </div>

            {/* Sensor Readings Panel */}
            <div className="sensor-readings-grid">
                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">🌡️</span>
                        <span className="sensor-name">Temperature</span>
                    </div>
                    <div className="sensor-value">{sensors.temperature.value} {sensors.temperature.unit}</div>
                    <div className={`sensor-status-badge ${sensors.temperature.status}`}>
                        {sensors.temperature.status}
                    </div>
                </div>

                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">⚡</span>
                        <span className="sensor-name">Grinding Current</span>
                    </div>
                    <div className="sensor-value">{sensors.current.value} {sensors.current.unit}</div>
                    <div className={`sensor-status-badge ${sensors.current.status}`}>
                        {sensors.current.status}
                    </div>
                </div>

                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">🔄</span>
                        <span className="sensor-name">Spindle Speed</span>
                    </div>
                    <div className="sensor-value">{sensors.speed.value} {sensors.speed.unit}</div>
                    <div className={`sensor-status-badge ${sensors.speed.status}`}>
                        {sensors.speed.status}
                    </div>
                </div>

                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">📊</span>
                        <span className="sensor-name">Vibration HE4 DE</span>
                    </div>
                    <div className="sensor-value">{sensors.vibration_he4.value} {sensors.vibration_he4.unit}</div>
                    <div className={`sensor-status-badge ${sensors.vibration_he4.status}`}>
                        {sensors.vibration_he4.status}
                    </div>
                </div>

                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">📊</span>
                        <span className="sensor-name">Vibration HV DE</span>
                    </div>
                    <div className="sensor-value">{sensors.vibration_hv.value} {sensors.vibration_hv.unit}</div>
                    <div className={`sensor-status-badge ${sensors.vibration_hv.status}`}>
                        {sensors.vibration_hv.status}
                    </div>
                </div>

                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">📊</span>
                        <span className="sensor-name">Vibration HA DE</span>
                    </div>
                    <div className="sensor-value">{sensors.vibration_ha.value} {sensors.vibration_ha.unit}</div>
                    <div className={`sensor-status-badge ${sensors.vibration_ha.status}`}>
                        {sensors.vibration_ha.status}
                    </div>
                </div>

                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">💧</span>
                        <span className="sensor-name">Mist Pressure</span>
                    </div>
                    <div className="sensor-value">{sensors.mistPressure.value} {sensors.mistPressure.unit}</div>
                    <div className={`sensor-status-badge ${sensors.mistPressure.status}`}>
                        {sensors.mistPressure.status}
                    </div>
                </div>

                <div className="sensor-card">
                    <div className="sensor-card-header">
                        <span className="sensor-icon">⚙️</span>
                        <span className="sensor-name">Workhead RPM</span>
                    </div>
                    <div className="sensor-value">{sensors.workheadRPM.value} {sensors.workheadRPM.unit}</div>
                    <div className={`sensor-status-badge ${sensors.workheadRPM.status}`}>
                        {sensors.workheadRPM.status}
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="sensor-legend">
                <div className="legend-title">Sensor Status:</div>
                <div className="legend-items">
                    <div className="legend-item">
                        <div className="legend-dot normal"></div>
                        <span>Normal</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot warning"></div>
                        <span>Warning</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-dot critical"></div>
                        <span>Critical</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
