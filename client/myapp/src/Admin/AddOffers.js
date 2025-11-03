import React, { useState } from 'react';
import adminstyles from './adminstyles.module.css';
import axios from 'axios';

const AddOffers = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [discount, setDiscount] = useState('');
    const [validity, setValidity] = useState('');

    const addOfferData = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/offer', {
                title,
                description,
                discount,
                validity,
            })
            .then((res) => {
                if (res.data.status === 'success') {
                    alert('Offer Added Successfully');
                    setTitle('');
                    setDescription('');
                    setDiscount('');
                    setValidity('');
                } else if (
                    res.data.status === 'failed' &&
                    res.data.message.toLowerCase().includes('already')
                ) {
                    alert('Offer Already Exists');
                } else {
                    alert('Unable to Add Offer');
                }
            })
            .catch(() => alert('Error adding offer'));
    };

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className={`col-md-6 ${adminstyles.bx_shadow}`}>
                        <form className="p-4" onSubmit={addOfferData}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Offer Title"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
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
                                    placeholder="Discount (e.g. 20%)"
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
                                    placeholder="Validity (e.g. 31 Dec 2025)"
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
                                    value="Add Offer"
                                    className="btn btn-success"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddOffers;