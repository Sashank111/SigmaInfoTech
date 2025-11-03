import { useEffect, useState } from 'react';
import axios from 'axios';
import adminstyles from './adminstyles.module.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import DataTable from 'datatables.net-dt/js/dataTables.dataTables.min.js';
import $ from 'jquery';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';

const DeleteOffers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/offer')
            .then((res) => {
                if (Array.isArray(res.data.message)) setData(res.data.message);
                else setData([]);
            })
            .catch(() => alert('Error fetching offers'));

        setTimeout(() => {
            $(function () {
                new DataTable('#offerTable');
            });
        }, 200);
    }, []);

    const deleteOfferData = (id) => {
        if (!window.confirm('Are you sure you want to delete this offer?'))
            return;

        axios
            .delete(`http://localhost:4000/offer/${id}`)
            .then((res) => {
                if (res.data.status === 'success') {
                    alert('Offer Deleted Successfully');
                    setData(data.filter((offer) => offer._id !== id));
                } else {
                    alert(res.data.message || 'Unable to delete offer');
                }
            })
            .catch(() => alert('Error deleting offer'));
    };

    return (
        <section className={`${adminstyles.services}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Offer List</h2>
                        <div className="table-responsive">
                            <table
                                className="table table-bordered table-hover display"
                                id="offerTable"
                            >
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Discount</th>
                                        <th>Validity</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((offer, idx) => (
                                        <tr key={idx}>
                                            <td>{offer.title}</td>
                                            <td>{offer.description}</td>
                                            <td>{offer.discount}</td>
                                            <td>{offer.validity}</td>
                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-2">
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        onClick={() =>
                                                            deleteOfferData(
                                                                offer._id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                    <NavLink
                                                        to={`/editoffer/${offer._id}`}
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

export default DeleteOffers;