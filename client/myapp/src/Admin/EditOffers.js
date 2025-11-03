import React, { useEffect, useState } from 'react';
import adminstyles from './adminstyles.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditOffers = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [discount, setDiscount] = useState('');
    const [validity, setValidity] = useState('');

    useEffect(() => {
        axios
            .get(`https://sigmainfotech.onrender.com/offer/${id}`)
            .then((res) => {
                const offer = res.data.message;
                setTitle(offer.title);
                setDescription(offer.description);
                setDiscount(offer.discount);
                setValidity(offer.validity);
            })
            .catch(() => alert('Error fetching offer details'));
    }, [id]);

    const editOfferData = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:4000/offer/${id}`, {
                title,
                description,
                discount,
                validity,
            })
            .then((res) => {
                if (res.data.status === 'success') {
                    alert('Offer Updated Successfully');
                    navigate('/admindashboard/deleteoffers');
                } else {
                    alert('Failed to update offer');
                }
            })
            .catch(() => alert('Error updating offer'));
    };

    return (
        <main>
            <section>
                <div className={adminstyles.bread}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Edit Offer</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div
                            className={`col-md-6 ${adminstyles.bx_shadow} mx-auto`}
                        >
                            <form className="p-4" onSubmit={editOfferData}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Offer Title"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        placeholder="Offer Description"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Discount"
                                        className="form-control"
                                        value={discount}
                                        onChange={(e) =>
                                            setDiscount(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Validity"
                                        className="form-control"
                                        value={validity}
                                        onChange={(e) =>
                                            setValidity(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="text-center">
                                    <input
                                        type="submit"
                                        value="Edit Offer"
                                        className="btn btn-success"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EditOffers;