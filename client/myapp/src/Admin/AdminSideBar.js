import React from 'react';
import { NavLink } from 'react-router-dom';
import adminstyles from './adminstyles.module.css';
const AdminSideBar = () => {
    return (
        <ul className={adminstyles.adminsidebar}>
            <li>
                <NavLink to="">Add Service</NavLink>
            </li>
            <li>
                <NavLink to="deleteservice">Delete/Edit Service</NavLink>
            </li>
            <li>
                <NavLink to="addsubservice">Add Sub-Service</NavLink>
            </li>
            <li>
                <NavLink to="deletesubservice">Delete/Edit Sub-Service</NavLink>
            </li>
            <li>
                <NavLink to="addoffers">Add Offers</NavLink>
            </li>
            <li>
                <NavLink to="deleteoffers">Delete/Edit Offers</NavLink>
            </li>
            <li>
                <NavLink to="bookservicedata">Book-service Data</NavLink>
            </li>
        </ul>
    );
};

export default AdminSideBar;
