import { useEffect, useState } from 'react';
import axios from 'axios';
import adminstyles from './adminstyles.module.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Correct CSS import
import $ from 'jquery';
import 'datatables.net-dt';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';

const DeleteSubService = () => {
    const [data, setData] = useState([]);

    // Fetch subservices
    useEffect(() => {
        axios
            .get('https://sigmainfotech.onrender.com/subservice')
            .then((res) => {
                setData(res.data.message);
            })
            .catch(() => {
                alert('Error fetching subservices');
            });
    }, []);

    // Initialize / reinitialize DataTable whenever data changes
    useEffect(() => {
        if (data.length) {
            // Destroy existing DataTable if exists
            if ($.fn.DataTable.isDataTable('#subserviceTable')) {
                $('#subserviceTable').DataTable().destroy();
            }
            // Reinitialize
            $('#subserviceTable').DataTable();
        }
    }, [data]);

    // Delete a subservice
    const deleteSubServiceData = (sid) => {
        axios
            .delete(`http://localhost:4000/subservice/${sid}`)
            .then(() => {
                alert('SubService Deleted Successfully');
                setData((prev) =>
                    prev.filter((subservice) => subservice._id !== sid)
                );
            })
            .catch(() => {
                alert('Error deleting subservice');
            });
    };

    return (
        <section className={`${adminstyles.services}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>SubService List</h2>
                        <div className="table-responsive">
                            <table
                                className="table table-bordered table-hover display"
                                id="subserviceTable"
                            >
                                <thead>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>SubService Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((subservice) => (
                                        <tr key={subservice._id}>
                                            <td>{subservice.sname}</td>
                                            <td>{subservice.subsname}</td>
                                            <td>{subservice.description}</td>
                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-2">
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        onClick={() =>
                                                            deleteSubServiceData(
                                                                subservice._id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                    <NavLink
                                                        to={`/edit-subservice/${subservice._id}`}
                                                    >
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                        >
                                                            <EditIcon />
                                                        </Button>
                                                    </NavLink>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeleteSubService;
