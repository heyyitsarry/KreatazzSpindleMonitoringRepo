import React, { useState, useMemo } from "react";
import "./data.css";

export default function Data() {
    const [filters, setFilters] = useState({
        machineId: "",
        he4Min: "",
        he4Max: "",
        hvMin: "",
        hvMax: "",
        haMin: "",
        haMax: "",
    });

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

    // Calculate metadata
    const metadata = useMemo(() => {
        const he4Values = sensorData.map(d => d.he4_de);
        const hvValues = sensorData.map(d => d.hv_de);
        const haValues = sensorData.map(d => d.ha_de);
        const tempValues = sensorData.map(d => d.temp);
        const currentValues = sensorData.map(d => d.current);
        const speedValues = sensorData.map(d => d.speed);
        const timestamps = sensorData.map(d => d.timestamp);

        return {
            totalRecords: 19270,
            timeRange: {
                start: timestamps[0],
                end: timestamps[timestamps.length - 1]
            },
            machines: [...new Set(sensorData.map(d => d.machine_id))],
            ranges: {
                he4_de: { min: Math.min(...he4Values).toFixed(3), max: Math.max(...he4Values).toFixed(3) },
                hv_de: { min: Math.min(...hvValues).toFixed(3), max: Math.max(...hvValues).toFixed(3) },
                ha_de: { min: Math.min(...haValues).toFixed(3), max: Math.max(...haValues).toFixed(3) },
                temp: { min: Math.min(...tempValues).toFixed(3), max: Math.max(...tempValues).toFixed(3) },
                current: { min: Math.min(...currentValues).toFixed(3), max: Math.max(...currentValues).toFixed(3) },
                speed: { min: Math.min(...speedValues).toFixed(1), max: Math.max(...speedValues).toFixed(1) }
            }
        };
    }, [sensorData]);

    // Filter data based on applied filters
    const filteredData = sensorData.filter((row) => {
        // Machine ID filter
        if (filters.machineId && !row.machine_id.toLowerCase().includes(filters.machineId.toLowerCase())) return false;

        // HE4 DE range filter
        if (filters.he4Min && row.he4_de < parseFloat(filters.he4Min)) return false;
        if (filters.he4Max && row.he4_de > parseFloat(filters.he4Max)) return false;

        // HV DE range filter
        if (filters.hvMin && row.hv_de < parseFloat(filters.hvMin)) return false;
        if (filters.hvMax && row.hv_de > parseFloat(filters.hvMax)) return false;

        // HA DE range filter
        if (filters.haMin && row.ha_de < parseFloat(filters.haMin)) return false;
        if (filters.haMax && row.ha_de > parseFloat(filters.haMax)) return false;

        return true;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({
            machineId: "",
            he4Min: "",
            he4Max: "",
            hvMin: "",
            hvMax: "",
            haMin: "",
            haMax: "",
        });
    };

    return (
        <div className="data-page">
            <header className="page-header">
                <h1>Data Table</h1>
                <p className="subtitle">Real-time spindle monitoring sensor data from grinding operations</p>
            </header>

            {/* Metadata Section */}
            <div className="metadata-section">
                <div className="metadata-card">
                    <div className="metadata-label">Total Records</div>
                    <div className="metadata-value">{metadata.totalRecords}</div>
                </div>
                <div className="metadata-card">
                    <div className="metadata-label">Time Range</div>
                    <div className="metadata-value-small">{metadata.timeRange.start} → {metadata.timeRange.end}</div>
                </div>
                <div className="metadata-card">
                    <div className="metadata-label">Machines</div>
                    <div className="metadata-value">{metadata.machines.join(', ')}</div>
                </div>
                <div className="metadata-card">
                    <div className="metadata-label">HE4 DE Range</div>
                    <div className="metadata-value">{metadata.ranges.he4_de.min} - {metadata.ranges.he4_de.max}</div>
                </div>
                <div className="metadata-card">
                    <div className="metadata-label">HV DE Range</div>
                    <div className="metadata-value">{metadata.ranges.hv_de.min} - {metadata.ranges.hv_de.max}</div>
                </div>
                <div className="metadata-card">
                    <div className="metadata-label">HA DE Range</div>
                    <div className="metadata-value">{metadata.ranges.ha_de.min} - {metadata.ranges.ha_de.max}</div>
                </div>
                <div className="metadata-card">
                    <div className="metadata-label">Temperature Range (°C)</div>
                    <div className="metadata-value">{metadata.ranges.temp.min} - {metadata.ranges.temp.max}</div>
                </div>
                <div className="metadata-card">
                    <div className="metadata-label">Speed Range (RPM)</div>
                    <div className="metadata-value">{metadata.ranges.speed.min} - {metadata.ranges.speed.max}</div>
                </div>
            </div>

            {/* Table with inline filters */}
            <div className="data-content">
                <div className="table-controls">
                    <button onClick={clearFilters} className="btn-clear-filters">
                        Clear All Filters
                    </button>
                    <span className="filter-results">
                        Showing {filteredData.length} of {sensorData.length} records
                    </span>
                </div>

                <div className="data-table-container">
                    <table className="data-table">
                        <thead>
                            <tr className="header-row">
                                <th>ID</th>
                                <th>Timestamp</th>
                                <th>Machine ID</th>
                                <th>Mist Pressure</th>
                                <th>Temp (°C)</th>
                                <th>Current (A)</th>
                                <th>Speed (RPM)</th>
                                <th>HE4 DE</th>
                                <th>HV DE</th>
                                <th>HA DE</th>
                                <th>Workhead RPM</th>
                                <th>Grinding Time (min)</th>
                            </tr>
                            <tr className="filter-row">
                                <th></th>
                                <th></th>
                                <th>
                                    <input
                                        type="text"
                                        name="machineId"
                                        value={filters.machineId}
                                        onChange={handleFilterChange}
                                        placeholder="Filter..."
                                        className="column-filter"
                                    />
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    <div className="range-filter">
                                        <input
                                            type="number"
                                            name="he4Min"
                                            value={filters.he4Min}
                                            onChange={handleFilterChange}
                                            placeholder="Min"
                                            step="0.001"
                                            className="column-filter range-input"
                                        />
                                        <input
                                            type="number"
                                            name="he4Max"
                                            value={filters.he4Max}
                                            onChange={handleFilterChange}
                                            placeholder="Max"
                                            step="0.001"
                                            className="column-filter range-input"
                                        />
                                    </div>
                                </th>
                                <th>
                                    <div className="range-filter">
                                        <input
                                            type="number"
                                            name="hvMin"
                                            value={filters.hvMin}
                                            onChange={handleFilterChange}
                                            placeholder="Min"
                                            step="0.001"
                                            className="column-filter range-input"
                                        />
                                        <input
                                            type="number"
                                            name="hvMax"
                                            value={filters.hvMax}
                                            onChange={handleFilterChange}
                                            placeholder="Max"
                                            step="0.001"
                                            className="column-filter range-input"
                                        />
                                    </div>
                                </th>
                                <th>
                                    <div className="range-filter">
                                        <input
                                            type="number"
                                            name="haMin"
                                            value={filters.haMin}
                                            onChange={handleFilterChange}
                                            placeholder="Min"
                                            step="0.001"
                                            className="column-filter range-input"
                                        />
                                        <input
                                            type="number"
                                            name="haMax"
                                            value={filters.haMax}
                                            onChange={handleFilterChange}
                                            placeholder="Max"
                                            step="0.001"
                                            className="column-filter range-input"
                                        />
                                    </div>
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.timestamp}</td>
                                    <td><strong>{row.machine_id}</strong></td>
                                    <td>{row.mist_pressure.toFixed(3)}</td>
                                    <td>{row.temp.toFixed(3)}</td>
                                    <td>{row.current.toFixed(3)}</td>
                                    <td>{row.speed.toFixed(1)}</td>
                                    <td>{row.he4_de.toFixed(3)}</td>
                                    <td>{row.hv_de.toFixed(3)}</td>
                                    <td>{row.ha_de.toFixed(3)}</td>
                                    <td>{row.workhead_rpm}</td>
                                    <td>{row.grinding_time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
