import React from 'react';
import adminstyles from './adminstyles.module.css';
import AdminSideBar from './AdminSideBar.js';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        navigate('/admin', { replace: true });
    };

    return (
        <main>
            {/* Top header section */}
            <section>
                <div className={adminstyles.bread}>
                    <h1>Admin Dashboard</h1>
                    <button
                        className={`btn btn-danger ${adminstyles.logoutBtn}`}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </section>

            {/* Dashboard content layout */}
            <section className="py-5">
                <div className="container-fluid px-4">
                    <div className="row gx-4">
                        {/* Sidebar aligned slightly to the left */}
                        <div className="col-lg-3 col-md-4 pe-0">
                            <div className="bg-light rounded shadow-sm p-3 h-100">
                                <AdminSideBar />
                            </div>
                        </div>

                        {/* Main content area pushed right with padding */}
                        <div className="col-lg-9 col-md-8 ps-lg-4 ps-md-3">
                            <div className="bg-white rounded shadow-sm p-4">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminDashboard;
