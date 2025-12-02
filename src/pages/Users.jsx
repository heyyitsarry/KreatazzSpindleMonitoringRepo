import React, { useState } from "react";
import "./users.css";

export default function Users() {
    const [users, setUsers] = useState([
        { id: 1, name: "John Smith", email: "john.smith@skf.com", role: "Administrator", status: "Active", lastLogin: "2025-11-14 09:30", department: "Engineering" },
        { id: 2, name: "Sarah Johnson", email: "sarah.johnson@skf.com", role: "Operator", status: "Active", lastLogin: "2025-11-14 10:15", department: "Production" },
        { id: 3, name: "Michael Chen", email: "michael.chen@skf.com", role: "Maintenance", status: "Active", lastLogin: "2025-11-13 16:45", department: "Maintenance" },
        { id: 4, name: "Emily Davis", email: "emily.davis@skf.com", role: "Supervisor", status: "Active", lastLogin: "2025-11-14 08:00", department: "Production" },
        { id: 5, name: "Robert Wilson", email: "robert.wilson@skf.com", role: "Engineer", status: "Active", lastLogin: "2025-11-14 11:20", department: "Engineering" },
        { id: 6, name: "Lisa Anderson", email: "lisa.anderson@skf.com", role: "Operator", status: "Away", lastLogin: "2025-11-12 14:30", department: "Production" },
        { id: 7, name: "David Martinez", email: "david.martinez@skf.com", role: "Maintenance", status: "Active", lastLogin: "2025-11-14 07:15", department: "Maintenance" },
        { id: 8, name: "Jennifer Taylor", email: "jennifer.taylor@skf.com", role: "Administrator", status: "Active", lastLogin: "2025-11-14 09:00", department: "IT" },
    ]);

    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterRole, setFilterRole] = useState("");
    const [filterStatus, setFilterStatus] = useState("");

    const roles = ["Administrator", "Supervisor", "Engineer", "Operator", "Maintenance"];
    const statuses = ["Active", "Away", "Inactive"];

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.department.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = !filterRole || user.role === filterRole;
        const matchesStatus = !filterStatus || user.status === filterStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const handleAddUser = () => {
        setSelectedUser(null);
        setShowModal(true);
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter(u => u.id !== userId));
        }
    };

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "Active": return "status-active";
            case "Away": return "status-away";
            case "Inactive": return "status-inactive";
            default: return "";
        }
    };

    const getRoleBadgeClass = (role) => {
        switch (role) {
            case "Administrator": return "role-admin";
            case "Supervisor": return "role-supervisor";
            case "Engineer": return "role-engineer";
            case "Operator": return "role-operator";
            case "Maintenance": return "role-maintenance";
            default: return "";
        }
    };

    return (
        <div className="users-page">
            <header className="page-header">
                <div>
                    <h1>User Management</h1>
                    <p className="subtitle">Manage system users, roles, and permissions</p>
                </div>
                <button className="btn-primary" onClick={handleAddUser}>
                    <span className="icon-add">+</span> Add New User
                </button>
            </header>

            {/* Stats Cards */}
            <div className="stats-section">
                <div className="stat-card">
                    <div className="stat-icon icon-users-stat"></div>
                    <div className="stat-content">
                        <div className="stat-label">Total Users</div>
                        <div className="stat-value">{users.length}</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-active-stat"></div>
                    <div className="stat-content">
                        <div className="stat-label">Active Users</div>
                        <div className="stat-value">{users.filter(u => u.status === "Active").length}</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-roles-stat"></div>
                    <div className="stat-content">
                        <div className="stat-label">Roles</div>
                        <div className="stat-value">{roles.length}</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon icon-admin-stat"></div>
                    <div className="stat-content">
                        <div className="stat-label">Administrators</div>
                        <div className="stat-value">{users.filter(u => u.role === "Administrator").length}</div>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="filters-bar">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search by name, email, or department..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="filter-controls">
                    <select
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                        className="filter-select"
                    >
                        <option value="">All Roles</option>
                        {roles.map(role => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="filter-select"
                    >
                        <option value="">All Status</option>
                        {statuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                    {(searchQuery || filterRole || filterStatus) && (
                        <button
                            className="btn-clear"
                            onClick={() => {
                                setSearchQuery("");
                                setFilterRole("");
                                setFilterStatus("");
                            }}
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>

            {/* Users Table */}
            <div className="users-content">
                <div className="users-table-container">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Last Login</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>
                                            <div className="user-info">
                                                <div className="user-avatar">{user.name.charAt(0)}</div>
                                                <strong>{user.name}</strong>
                                            </div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.department}</td>
                                        <td>
                                            <span className={`role-badge ${getRoleBadgeClass(user.role)}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${getStatusBadgeClass(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="last-login">{user.lastLogin}</td>
                                        <td>
                                            <div className="action-buttons">
                                                <button
                                                    className="btn-action btn-edit"
                                                    onClick={() => handleEditUser(user)}
                                                    title="Edit user"
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    className="btn-action btn-delete"
                                                    onClick={() => handleDeleteUser(user.id)}
                                                    title="Delete user"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="no-results">
                                        No users found matching your criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Results Summary */}
            <div className="results-summary">
                Showing {filteredUsers.length} of {users.length} users
            </div>
        </div>
    );
}
