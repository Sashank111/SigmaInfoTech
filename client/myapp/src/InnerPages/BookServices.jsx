import React, { useEffect, useState } from 'react';
import innerstyles from './innerstyles.module.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BookServices = () => {
    const location = useLocation();
    const [serviceName, setServiceName] = useState('');
    const [subServiceName, setSubServiceName] = useState('');
    const [sId, setSId] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const serviceId = params.get('sid');
        const subservice = params.get('subservice');

        if (serviceId) {
            setSId(serviceId);
        }

        if (subservice) {
            setSubServiceName(subservice);
        }
    }, [location.search]);

    useEffect(() => {
        if (sId) {
            // Fetch service name using sId
            axios
                .get(`https://sigmainfotech.onrender.com/service/${sId}`)
                .then((res) => {
                    setServiceName(res.data.message.sname || 'Unknown Service');
                })
                .catch(() => {
                    setServiceName('Unknown Service');
                });
        }
    }, [sId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect form data from inputs
        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        // Add service info
        const payload = {
            serviceId: sId,
            serviceName,
            subServiceName,
            ...data,
        };

        // Post to backend
        axios
            .post('https://sigmainfotech.onrender.com/bookservice', payload)
            .then((res) => {
                alert(
                    res.data.status === 'success'
                        ? 'Booking submitted successfully'
                        : res.data.message
                );
                e.target.reset(); // Reset user inputs
            })
            .catch(() => {
                alert('Error submitting booking');
            });
    };

    return (
        <main>
            <section className={innerstyles.bread}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Book a Service</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`pt-5 pb-3 ${innerstyles.offers}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form
                                onSubmit={handleSubmit}
                                className={`row ${innerstyles.bx_shadow}`}
                            >
                                <div className="col-md-6 mb-4">
                                    <input
                                        type="text"
                                        name="serviceName"
                                        className="form-control"
                                        placeholder="Service Name"
                                        value={serviceName}
                                        readOnly
                                    />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <input
                                        type="text"
                                        name="subServiceName"
                                        className="form-control"
                                        placeholder="Sub Service Name"
                                        value={subServiceName}
                                        readOnly
                                    />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <input
                                        type="text"
                                        name="userName"
                                        className="form-control"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <input
                                        type="email"
                                        name="userEmail"
                                        className="form-control"
                                        placeholder="Your Email ID"
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <input
                                        type="tel"
                                        name="userPhone"
                                        className="form-control"
                                        placeholder="Your Phone Number"
                                        required
                                    />
                                </div>

                                <div className="col-md-12 mb-4">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BookServices;
