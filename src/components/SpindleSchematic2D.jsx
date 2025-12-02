import React from "react";
import "./SpindleSchematic2D.css";

export default function SpindleSchematic2D() {
    return (
        <div className="schematic-container">
            <svg viewBox="0 0 900 400" className="spindle-schematic">
                {/* CNC Tool Holder / Load (purple) - Left end - 10% */}
                <rect x="30" y="155" width="90" height="90" fill="#b794f4" stroke="#553c9a" strokeWidth="3" />
                <text x="75" y="195" textAnchor="middle" fill="#1a1a1a" fontSize="13" fontWeight="700">Tool</text>
                <text x="75" y="210" textAnchor="middle" fill="#1a1a1a" fontSize="13" fontWeight="700">Holder</text>

                {/* Front Bearing Housing (yellow) - 8% - High Load Area */}
                <rect x="120" y="130" width="70" height="140" fill="#ffd93d" stroke="#d4af37" strokeWidth="3" />
                
                {/* Front Lubricator (light blue) - Larger for front bearing */}
                <rect x="128" y="145" width="54" height="50" fill="#90cdf4" stroke="#3182ce" strokeWidth="2" />
                <rect x="128" y="205" width="54" height="50" fill="#90cdf4" stroke="#3182ce" strokeWidth="2" />

                {/* Front Bearings (green dots) */}
                <circle cx="140" cy="125" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <circle cx="160" cy="125" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <circle cx="140" cy="275" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <circle cx="160" cy="275" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />

                {/* Main Shaft (red) - 65% - Longest component */}
                <rect x="190" y="175" width="520" height="50" fill="#fc8181" stroke="#c53030" strokeWidth="3" />
                <text x="450" y="145" textAnchor="middle" fill="#1a1a1a" fontSize="16" fontWeight="700">Main Shaft (Rotating)</text>

                {/* Motor/Stator Section (green) - 12% - Middle section */}
                <rect x="480" y="85" width="110" height="10" fill="#68d391" stroke="#2f855a" strokeWidth="2" />
                <rect x="480" y="97" width="110" height="8" fill="#68d391" stroke="#2f855a" strokeWidth="2" />
                <rect x="480" y="107" width="110" height="8" fill="#68d391" stroke="#2f855a" strokeWidth="2" />
                <rect x="480" y="117" width="110" height="7" fill="#68d391" stroke="#2f855a" strokeWidth="2" />
                <text x="535" y="75" textAnchor="middle" fill="#1a1a1a" fontSize="13" fontWeight="700">Motor/Stator</text>

                {/* Rear Bearing Housing (yellow) - 8% */}
                <rect x="710" y="135" width="70" height="130" fill="#ffd93d" stroke="#d4af37" strokeWidth="3" />
                
                {/* Rear Lubricator (light blue) - Smaller for rear bearing */}
                <rect x="718" y="150" width="54" height="45" fill="#90cdf4" stroke="#3182ce" strokeWidth="2" />
                <rect x="718" y="210" width="54" height="45" fill="#90cdf4" stroke="#3182ce" strokeWidth="2" />

                {/* Rear Bearings (green dots) */}
                <circle cx="730" cy="130" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <circle cx="750" cy="130" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <circle cx="730" cy="270" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <circle cx="750" cy="270" r="7" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />

                {/* Rear Cap/Housing End */}
                <rect x="780" y="160" width="25" height="80" fill="#cbd5e0" stroke="#718096" strokeWidth="2" />

                {/* Chiller Lines (green) - 2 pipes for supply & return */}
                <rect x="120" y="290" width="660" height="8" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <text x="100" y="298" textAnchor="end" fill="#1a1a1a" fontSize="9" fontWeight="600">Supply</text>
                <rect x="120" y="305" width="660" height="8" fill="#48bb78" stroke="#2f855a" strokeWidth="2" />
                <text x="100" y="313" textAnchor="end" fill="#1a1a1a" fontSize="9" fontWeight="600">Return</text>
                <text x="450" y="335" textAnchor="middle" fill="#1a1a1a" fontSize="13" fontWeight="700">Chiller Lines (Coolant Flow)</text>

                {/* Component Labels */}
                <text x="155" y="110" textAnchor="middle" fill="#1a1a1a" fontSize="11" fontWeight="600">Front Bearing</text>
                <text x="155" y="290" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontWeight="600">Lubricator</text>
                <text x="745" y="115" textAnchor="middle" fill="#1a1a1a" fontSize="11" fontWeight="600">Rear Bearing</text>
                <text x="745" y="290" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontWeight="600">Lubricator</text>
            </svg>

            {/* Legend */}
            <div className="schematic-legend">
                <div className="legend-item">
                    <div className="legend-color" style={{ background: '#fc8181' }}></div>
                    <span>Shaft</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: '#ffd93d' }}></div>
                    <span>Bearing Housing</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: '#90cdf4' }}></div>
                    <span>Lubricator</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: '#68d391' }}></div>
                    <span>Stator</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: '#48bb78' }}></div>
                    <span>Chiller Line</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{ background: '#b794f4' }}></div>
                    <span>CNC Load</span>
                </div>
            </div>
        </div>
    );
}
