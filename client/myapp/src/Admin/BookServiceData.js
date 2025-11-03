import { useEffect, useState } from 'react';
import axios from 'axios';
import adminstyles from './adminstyles.module.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const BookServiceData = () => {
    const [data, setData] = useState([]);

    const fetchBookings = () => {
        axios
            .get('https://sigmainfotech.onrender.com/bookservice')
            .then((res) => {
                console.log('Bookings response:', res.data); // ✅ log only, no alert

                let bookings = [];
                if (Array.isArray(res.data)) bookings = res.data;
                else if (Array.isArray(res.data.message))
                    bookings = res.data.message;

                setData(bookings);
            })
            .catch((err) => console.error('Error fetching booking data:', err));
    };

    // ✅ Fetch data once on mount
    useEffect(() => {
        fetchBookings();
    }, []);

    // ✅ Initialize DataTable only when data exists
    useEffect(() => {
        if (data.length > 0) {
            if ($.fn.DataTable.isDataTable('#bookServiceTable')) {
                $('#bookServiceTable').DataTable().destroy();
            }
            $('#bookServiceTable').DataTable();
        }
    }, 1000);

    const deleteBookServiceData = (id) => {
        if (!window.confirm('Are you sure you want to delete this booking?'))
            return;

        axios
            .delete(`https://sigmainfotech.onrender.com/bookservice/${id}`)
            .then((res) => {
                if (res.data.status === 'success') {
                    console.log('Booking deleted successfully'); // ✅ log instead of alert
                    setData((prev) => prev.filter((item) => item._id !== id));
                } else {
                    console.error(
                        'Failed to delete booking:',
                        res.data.message || 'Unknown error'
                    );
                }
            })
            .catch((err) => console.error('Error deleting booking:', err));
    };

    return (
        <section className={`${adminstyles.services}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Book Service Records</h2>
                        <div className="table-responsive">
                            <table
                                className="table table-bordered table-hover display"
                                id="bookServiceTable"
                            >
                                <thead>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>SubService Name</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Message</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(data) && data.length > 0 ? (
                                        data.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>{item.serviceName}</td>
                                                <td>{item.subServiceName}</td>
                                                <td>{item.userName}</td>
                                                <td>{item.userEmail}</td>
                                                <td>{item.userPhone}</td>
                                                <td>{item.message}</td>
                                                <td className="text-center">
                                                    <IconButton
                                                        color="error"
                                                        onClick={() =>
                                                            deleteBookServiceData(
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-center py-3"
                                            >
                                                No bookings found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookServiceData;
