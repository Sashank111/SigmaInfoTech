import { useEffect, useState } from 'react';
import axios from 'axios';
import adminstyles from './adminstyles.module.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
const DeleteService = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://sigmainfotech.onrender.com/service')
            .then((res) => {
                setData(res.data.message);
            })
            .catch(() => {
                alert('Error fetching services');
            });
        setTimeout(() => {
            $(function () {
                new DataTable('#mytable');
            });
        }, 1000);
    }, []);

    const deleteServiceData = (sid) => {
        axios
            .delete(`https://sigmainfotech.onrender.com/service/${sid}`)
            .then(() => {
                alert('Service Deleted Successfully');
                setData(data.filter((service) => service._id !== sid));
            })
            .catch(() => {
                alert('Error deleting service');
            });
    };
    return (
        <section className={`${adminstyles.services}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Service List</h2>
                        <div className="table-responsive">
                            <table
                                className="table table-bordered table-hover display"
                                id="mytable"
                            >
                                <thead>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((service, idx) => (
                                        <tr key={idx}>
                                            <td>{service.sname}</td>
                                            <td>{service.description}</td>
                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-2">
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        onClick={() =>
                                                            deleteServiceData(
                                                                service._id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                    <NavLink
                                                        to={`/editservice/${service._id}`}
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

export default DeleteService;
